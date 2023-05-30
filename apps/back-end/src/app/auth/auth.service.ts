import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

import { randomBytes, scrypt} from 'crypto';
import { promisify } from 'util';

import { JwtService } from '@nestjs/jwt';

const promisifiedScrypt = promisify(scrypt);

import { ConfigService } from '@nestjs/config';


@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private configService: ConfigService
        ){

    }

    async signUp(userName: string,email: string, password: string){
        const users = await this.usersService.findByEmail(email);
        if(users.length){
          throw new BadRequestException('email already in use');
        }

        const salt = randomBytes(8).toString('hex');
        const hash =  (await promisifiedScrypt(password,salt,32)) as Buffer;
        const hashedAndSaltedPw = salt + '.' + hash.toString('hex');

        return this.usersService.create({userName,email,password: hashedAndSaltedPw});

    }

    async validateUser(email: string, password: string){

        const users = await this.usersService.findByEmail(email);
        if(users.length === 0) throw new NotFoundException('Wrong username or password!');

        const user = users[0];
        const [dbSalt,dbPassword] = (user.password).split('.');
        const hash = (await promisifiedScrypt(password,dbSalt,32)) as Buffer;
        const hashedPw = hash.toString('hex');

        if(dbPassword !== hashedPw) throw new NotFoundException();

         const result = {
            id: user.id,
            userName: user.userName
         }

         return result;

    }

    async login(user: { userName: string, id: string}){
        const payload = { userName: user.userName, sub: user.id};

        const accessToken = this.jwtService.sign(payload);
        const now =  new Date();
        const tokenExpiration = now.setSeconds(now.getSeconds() + this.configService.get<number>('JWT_EXPIRES_IN'));

        return {
            access_token: accessToken,
            token_expiration: tokenExpiration,
            userName: user.userName
        };

    }
}
