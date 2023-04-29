import { Test, TestingModule } from '@nestjs/testing';
import { CustomerDetailsService } from './customer-details.service';

describe('CustomerDetailsService', () => {
  let service: CustomerDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerDetailsService],
    }).compile();

    service = module.get<CustomerDetailsService>(CustomerDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
