import { Controller, Get, Post, Param, Body, Delete, Patch, NotFoundException, UseInterceptors } from '@nestjs/common';

import { UsersService } from './users.service';

// DTO'S
import { UserDto } from './dtos/user.dto';

import { SerializeResponse } from '../interceptors/serialize.interceptor';

@Controller('users')
@SerializeResponse(UserDto)
export class UsersController {
    constructor(private usersService: UsersService){

    }

     @Get()
     findAll(){
        return this.usersService.findAll()
     }
    
     @Get('/:id')
     async findOne(@Param('id') id: number){
         const user = await this.usersService.findOne(id);
         if(!user){
            throw new NotFoundException('User not Found');
         }
         return user;
     }

     @Patch('/:id')
     updateUserPassword(@Param('id') id: string, @Body() body: { password: string}){
         return this.usersService.updateUserPassword(parseInt(id),body.password);
     }

     @Delete('/:id')
     deleteUser(@Param('id') id: string){
       return this.usersService.remove(parseInt(id));
     }



}
