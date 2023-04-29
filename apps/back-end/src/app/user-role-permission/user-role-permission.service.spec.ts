import { Test, TestingModule } from '@nestjs/testing';
import { UserRolePermissionService } from './user-role-permission.service';

describe('UserRolePermissionService', () => {
  let service: UserRolePermissionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRolePermissionService],
    }).compile();

    service = module.get<UserRolePermissionService>(UserRolePermissionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
