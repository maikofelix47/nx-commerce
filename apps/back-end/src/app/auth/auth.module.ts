import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';

// passport modules

import { PassportModule } from '@nestjs/passport';


//strategies
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import configuration from '../config/configuration';
const config = configuration();

@Module({
    imports: [
        UsersModule, 
        PassportModule,
        JwtModule.register(config.jwt),
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy, ConfigService]
})
export class AuthModule {}
