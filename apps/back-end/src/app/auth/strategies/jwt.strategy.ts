import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { ConfigService } from '@nestjs/config';

const configurationService = new ConfigService();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configurationService.get('JWT_SECRET')
        });
    }


    async validate(payload: any){
       return {
         userId: payload.sub,
         userName: payload.userName
       }
    }
}