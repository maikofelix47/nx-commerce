import { Test, TestingModule } from '@nestjs/testing';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';

class FakePermissionService{

};

describe('PermissionController', () => {
  let controller: PermissionController;
  let permissionService: PermissionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: PermissionService,
          useClass: FakePermissionService
        }
      ],
      controllers: [PermissionController],
    }).compile();

    controller = module.get<PermissionController>(PermissionController);
    permissionService = module.get<PermissionService>(PermissionService)
  });

  it('controller should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('permission service should be defined', () => {
    expect(permissionService).toBeDefined();
  });
});
