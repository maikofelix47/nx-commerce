import { Controller, Body, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dtos/create-user-dto';

import { SerializeResponse } from '../interceptors/serialize.interceptor';
import { UserDto } from '../users/dtos/user.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
     constructor(private authService: AuthService){

     }

    @Post('sign-up')
    @SerializeResponse(UserDto)
    signUpUser(@Body() body: CreateUserDto){
        const { userName, email, password } = body;
       return this.authService.signUp(userName,email,password);
    }

    @UseGuards(LocalAuthGuard)
    @Post('/sign-in')
    signIn(@Request() req: any): Promise<any>{
       return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/profile')
    getProfile(@Request() req){
        return req.user;
    }


}
