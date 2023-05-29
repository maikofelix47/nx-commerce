import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { User } from '../users/user.entity';
import { AuthService } from './auth.service';

class FakeAuthService {
  public signUp(
    userName: string,
    email: string,
    password: string
  ): Promise<Partial<User>> {
    return Promise.resolve({ id: 1, email: email });
  }
}

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AuthService,
          useClass: FakeAuthService
        }
      ],
      controllers: [AuthController],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
