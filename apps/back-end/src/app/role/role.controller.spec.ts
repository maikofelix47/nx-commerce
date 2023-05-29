import { Test, TestingModule } from '@nestjs/testing';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

const mockRoleService = {

};

describe('RoleController', () => {
  let controller: RoleController;
  let roleService: RoleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers:[
        {
          provide: RoleService,
          useValue: mockRoleService
        }
      ],
      controllers: [RoleController],
    }).compile();

    controller = module.get<RoleController>(RoleController);
    roleService = module.get<RoleService>(RoleService);
  });

  it('role controller should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('role service should be defined', () => {
    expect(roleService).toBeDefined();
  });
});
