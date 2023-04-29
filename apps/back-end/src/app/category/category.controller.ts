import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  NotFoundException,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './category.entity';

import { SerializeResponse } from '../interceptors/serialize.interceptor';
import { CategoryDto } from './dto/category.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  @Get()
  @SerializeResponse(CategoryDto)
  async findAll() {
    const categories = await this.categoryService.findAll();
    if (!categories) {
      return new NotFoundException('Categories not found');
    } else {
      return categories;
    }
  }

  @Get('/:id')
  @SerializeResponse(CategoryDto)
  async findById(@Param('id') id: number) {
    const category = await this.categoryService.findById(id);
    if (!category) {
      return new NotFoundException('Category not found');
    } else {
      return category;
    }
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createMedia(@Body() body: CreateCategoryDto, @Request() req: any) {
    const { userId } = req.user;
    const categorPayload = body as unknown as Category;
    categorPayload.createdBy = userId;
    return this.categoryService.createCategory(categorPayload);
  }
}
