import { IsString } from "class-validator";

export class UpdateUserDto{
    @IsString()
    password: string;
}