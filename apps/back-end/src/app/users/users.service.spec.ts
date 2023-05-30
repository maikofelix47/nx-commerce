import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

const FakeUserRepository = {
   find: jest.fn(),
   findOneBy: jest.fn(),
   findBy: jest.fn(),
   save: jest.fn(),
   remove: jest.fn(),
   create: jest.fn()
};

const mockUser = {
  "email": "test@gmail.com",
  "password": "testPassword"
};

const mockCreatedUser = {
    id: 1,
    userName: '',
    password: mockUser.password,
    isActive: true,
    email: mockUser.email,
    uuid: 'uuid1',
    voided: null,
    voidedDate: null,
    voidedBy: null,
    voidedReason: null,
    createdAt: new Date(),
    updatedAt: new Date()
};

const USER_REPOSITORY_TOKEN = getRepositoryToken(User);

describe('UsersService', () => {
  let service: UsersService;
  let userRepository: Repository<User>;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
       UsersService,
       {
        provide: USER_REPOSITORY_TOKEN,
        useValue: FakeUserRepository
       }
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    userRepository = module.get<Repository<User>>(USER_REPOSITORY_TOKEN);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('user repository should be defined',()=>{
     expect(userRepository).toBeDefined();
  });
  describe('create',()=>{
    it('should call create user with correct params', async ()=>{
      await service.create(mockUser);
      expect(userRepository.create).toHaveBeenCalledWith(mockUser);
    });

  });

  describe('findAll',()=>{
    it('should call user repository find method and return users array', async ()=>{
      jest.spyOn(userRepository,'find').mockReturnValue(Promise.resolve([
        {
          ...mockCreatedUser
        }
      ]));
      await service.findAll();
      expect(userRepository.find).toHaveBeenCalled();
      const users = await userRepository.find();
      expect(users).toStrictEqual([mockCreatedUser]);
    });

  });
 
});
