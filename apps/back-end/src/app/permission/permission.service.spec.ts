import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { PermissionService } from './permission.service';
import { Permission } from './permission-entity';
import { getRepositoryToken } from '@nestjs/typeorm';

const fakePermissionRepo = {

};
const PERMISSION_REPO_TOKEN = getRepositoryToken(Permission);;

describe('PermissionService', () => {
  let service: PermissionService;
  let permissonRepo: Repository<Permission>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PermissionService,
        {
          provide: PERMISSION_REPO_TOKEN,
          useValue: fakePermissionRepo
        }
      ],
    }).compile();

    service = module.get<PermissionService>(PermissionService);
    permissonRepo = module.get<Repository<Permission>>(PERMISSION_REPO_TOKEN);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
