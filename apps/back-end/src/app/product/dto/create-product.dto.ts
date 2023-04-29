import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  subCategoryId: string;

  @IsString()
  price: string;

  @IsString()
  inStock: string;
}
