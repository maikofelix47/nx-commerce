import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { RoleService } from './role.service';
import { Role } from './role.entity';
import { Repository } from 'typeorm';


const FakeRoleRepository = {
  find: jest.fn(),
  findBy: jest.fn(),
  create: jest.fn(),
  save: jest.fn()
};

const ROLE_REPOSITORY_TOKEN = getRepositoryToken(Role);

describe('RoleService', () => {
  let service: RoleService;
  let roleRepository: Repository<Role>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RoleService,
        {
          provide: ROLE_REPOSITORY_TOKEN,
          useValue: FakeRoleRepository
        }
      ],
    }).compile();

    service = module.get<RoleService>(RoleService);
    roleRepository = module.get<Repository<Role>>(ROLE_REPOSITORY_TOKEN);
  });

  it('role service should be defined', () => {
    expect(service).toBeDefined();
  });
  it('role repository should be defined', () => {
    expect(roleRepository).toBeDefined();
  });
});
