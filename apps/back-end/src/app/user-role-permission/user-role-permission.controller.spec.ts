import { Test, TestingModule } from '@nestjs/testing';
import { UserRolePermissionController } from './user-role-permission.controller';

describe('UserRolePermissionController', () => {
  let controller: UserRolePermissionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRolePermissionController],
    }).compile();

    controller = module.get<UserRolePermissionController>(UserRolePermissionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
