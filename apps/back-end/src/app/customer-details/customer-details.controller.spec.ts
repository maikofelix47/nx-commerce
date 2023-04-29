import { Test, TestingModule } from '@nestjs/testing';
import { CustomerDetailsController } from './customer-details.controller';

describe('CustomerDetailsController', () => {
  let controller: CustomerDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerDetailsController],
    }).compile();

    controller = module.get<CustomerDetailsController>(CustomerDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
