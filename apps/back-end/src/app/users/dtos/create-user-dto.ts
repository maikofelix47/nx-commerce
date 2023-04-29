import { IsEmail, IsString } from "class-validator";

export class CreateUserDto{
    @IsString()
    userName: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}