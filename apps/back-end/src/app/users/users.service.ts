import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ){

    }

    findAll(): Promise<User[]>{
       return this.usersRepository.find();
    }

    findOne(id: number): Promise<User>{
       return this.usersRepository.findOneBy({id});
    }

    findByEmail(email: string): Promise<User[]>{
         return this.usersRepository.findBy({email});
    }

    async remove(id: number): Promise<void>{
        const user = await this.findOne(id);
        if(!user){
          throw new NotFoundException('User not found!');
        }
        await this.usersRepository.remove(user);
    }

    create(user: Partial<User>): Promise<User>{
        const userEntity = this.usersRepository.create(user);
        return this.usersRepository.save(userEntity);
    }

    async updateUserPassword(id: number, newPassword: string){
        const user = await this.usersRepository.findOneBy({id});
        if(!user){
            throw new NotFoundException('User with the email not found!');
        }
        Object.assign(user,{ password: newPassword });
        return this.usersRepository.save(user);
    }
}
