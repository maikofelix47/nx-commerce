import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubCategory } from './sub-category.entity';

@Injectable()
export class SubCategoryService {
  constructor(
    @InjectRepository(SubCategory)
    private subCategoryRepo: Repository<SubCategory>,
  ) {}

  findAll() {
    return this.subCategoryRepo.find({
      relations: {
        category: true,
      },
    });
  }

  findById(id: number) {
    return this.subCategoryRepo.findBy({ id });
  }

  async create(subCategory: SubCategory) {
    const subCategoryEntity = await this.subCategoryRepo.create(subCategory);
    return this.subCategoryRepo.save(subCategoryEntity);
  }

  findByCategoryId(categoryId: number): Promise<SubCategory[]> {
    return this.subCategoryRepo.findBy({
      categoryId,
    });
  }
}
