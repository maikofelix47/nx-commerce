import { Test, TestingModule } from '@nestjs/testing';
import { CategoryService } from './category.service';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

const fakeCategoryRepo = {

};

const CATEGORY_REPO_TOKEN = getRepositoryToken(Category);

describe('CategoryService', () => {
  let service: CategoryService;
  let categoryRepo: Repository<Category>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoryService,
        {
          provide: CATEGORY_REPO_TOKEN,
          useValue: fakeCategoryRepo
        }
      ],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
    categoryRepo = module.get<Repository<Category>>(CATEGORY_REPO_TOKEN);
  });

  it('category service should be defined', () => {
    expect(service).toBeDefined();
  });
  it('category repository should be defined', () => {
    expect(categoryRepo).toBeDefined();
  });
});
