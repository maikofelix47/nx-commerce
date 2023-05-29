import { Test, TestingModule } from '@nestjs/testing';
import { SubCategoryService } from './sub-category.service';
import { Repository } from 'typeorm';
import { SubCategory } from './sub-category.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

const mockSubCategoryRepo = {

};

const SUB_CATEGORY_TOKEN = getRepositoryToken(SubCategory);


describe('SubCategoryService', () => {
  let service: SubCategoryService;
  let subCategoryRepo: Repository<SubCategory>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SubCategoryService,
        {
          provide: SUB_CATEGORY_TOKEN,
          useValue: mockSubCategoryRepo
        }
      ],
    }).compile();

    service = module.get<SubCategoryService>(SubCategoryService);
    subCategoryRepo = module.get<Repository<SubCategory>>(SUB_CATEGORY_TOKEN);
  });

  it('subcategory service should be defined', () => {
    expect(service).toBeDefined();
  });
  it('subcategory repo should be defined', () => {
    expect(subCategoryRepo).toBeDefined();
  });
});
