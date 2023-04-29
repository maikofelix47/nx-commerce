import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.categoryRepo.find({
      relations: {
        media: true,
      },
    });
  }

  findById(id: number): Promise<Category> {
    return this.categoryRepo.findOne({
      where: {
        id: id,
      },
      relations: {
        media: true,
      },
    });
  }

  async createCategory(category: Category) {
    const gategoryPayload: Partial<Category> = {
      name: category.name,
      description: category.description,
      createdBy: category.createdBy,
    };

    // create category with media id
    const categoryEntity = await this.categoryRepo.create(gategoryPayload);

    return this.categoryRepo.save(categoryEntity);
  }
}
