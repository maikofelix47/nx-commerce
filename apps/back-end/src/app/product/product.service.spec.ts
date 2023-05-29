import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MediaService } from '../media/media.service';

const mockProductRepo = {
  find: jest.fn(),
  findBy: jest.fn(),
  create: jest.fn(),
  save: jest.fn()
};

const mockMediaService={

};

const PRODUCT_REPO_TOKEN = getRepositoryToken(Product);

describe('ProductService', () => {
  let service: ProductService;
  let productRepo: Repository<Product>;
  let mediaService: MediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: PRODUCT_REPO_TOKEN,
          useValue: mockProductRepo
        },
        {
          provide: MediaService,
          useValue: mockMediaService
        }
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
    productRepo = module.get<Repository<Product>>(PRODUCT_REPO_TOKEN);
    mediaService = module.get<MediaService>(MediaService);
  });

  it('product service should be defined', () => {
    expect(service).toBeDefined();
  });
  it('product repo should be defined', () => {
    expect(productRepo).toBeDefined();
  });
  it('media service should be defined', () => {
    expect(mediaService).toBeDefined();
  });
});
