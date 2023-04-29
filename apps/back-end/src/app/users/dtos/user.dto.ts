import { IsEmail, IsNumber, IsString } from "class-validator";
import { Expose } from "class-transformer";

export class UserDto{
    @IsNumber()
    @Expose()
    id: number;

    @IsEmail()
    @Expose()
    email: string;

    @IsString()
    password: string;
}