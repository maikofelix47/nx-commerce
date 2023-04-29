import { IsNumber, IsString } from "class-validator";

export class CreateSubCategoryDto{
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNumber()
    categoryId: number;
}