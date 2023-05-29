import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

const mockProductService = {

};

describe('ProductController', () => {
  let controller: ProductController;
  let productsService: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ProductService,
          useValue: mockProductService
        }
      ],
      controllers: [ProductController],
    }).compile();

    controller = module.get<ProductController>(ProductController);
    productsService = module.get<ProductService>(ProductService)
  });

  it('product controller should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('product service should be defined', () => {
    expect(productsService).toBeDefined();
  });

});
