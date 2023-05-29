import { Test, TestingModule } from '@nestjs/testing';
import { SubCategoryController } from './sub-category.controller';
import { SubCategoryService } from './sub-category.service';

const mockSubCategoryService = {

};

describe('SubCategoryController', () => {
  let controller: SubCategoryController;
  let subCategoryService: SubCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: SubCategoryService,
          useValue: mockSubCategoryService
        }
      ],
      controllers: [SubCategoryController],
    }).compile();

    controller = module.get<SubCategoryController>(SubCategoryController);
    subCategoryService = module.get<SubCategoryService>(SubCategoryService);
  });

  it('subcategory controller should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('subcategory service should be defined', () => {
    expect(subCategoryService).toBeDefined();
  });
});
