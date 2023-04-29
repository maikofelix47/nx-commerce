import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Category } from './category.entity';

import { MediaModule } from '../media/media.module';

@Module({
  imports: [TypeOrmModule.forFeature([Category]), MediaModule],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
