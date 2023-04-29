import { IsString, IsNumber } from 'class-validator';
import { Expose, Transform } from 'class-transformer';

export class CategoryDto {
  @IsNumber()
  @Expose()
  id: number;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  description: string;

  @Expose()
  @IsString()
  uuid: string;

  @Expose()
  @Transform(({ obj }) => obj?.media?.url || '')
  featureImg: string;
}
