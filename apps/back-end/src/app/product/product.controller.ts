import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Request,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductService } from './product.service';

// DTOS
import { CreateProductDto } from './dto/create-product.dto';

import { Product } from './product.entity';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { File } from '../models/file';

@Controller('product')
export class ProductController {
  constructor(private prodService: ProductService) {}

  @Get()
  getAllProducts(): Promise<Product[]> {
    return this.prodService.findAll();
  }

  @Get('/:id')
  getProductById(@Param('id') id: string): Promise<Product[]> {
    return this.prodService.findById(parseInt(id));
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  createProduct(
    @Body() body: CreateProductDto,
    @UploadedFile() file: File,
    @Request() req: any,
  ): Promise<Product> {
    const { userId } = req.user;
    const payload = body as unknown as Product;
    payload.createdBy = userId;
    payload.productImg = body.name;
    return this.prodService.createProduct(payload, file);
  }

  @Get('/sub-category/:subCategoryId')
  getProductsBySubCategory(@Param('subCategoryId') subCategoryId: string) {
    return this.prodService.findBySubCategoryId(parseInt(subCategoryId));
  }
}
