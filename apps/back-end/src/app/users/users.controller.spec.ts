import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

const fakeUsersService = {
  findAll: jest.fn(()=>{
    return Promise.resolve([{
      id: 1,
      email: "test22@gmail.com"
     }]);
  }),
  findOne: jest.fn((id: number)=> {
    return Promise.resolve({
      id: id,
      email: "test22@gmail.com"
     });

  }),
  updateUserPassword: jest.fn((id: number, password: string)=>{
       return Promise.resolve({
        id: id,
        email: "test22@gmail.com"
       });
  }),
  remove: jest.fn(()=>{
     return Promise.resolve();
  })
};

describe('UsersController', () => {
  let controller: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
       {
        provide: UsersService,
        useValue: fakeUsersService
       }
      ],
      controllers: [UsersController],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService)
  });

  it('users controller should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('users service should be defined', () => {
    expect(usersService).toBeDefined();
  });
});
