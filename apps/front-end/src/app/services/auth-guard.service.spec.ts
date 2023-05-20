import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthGuardService } from './auth-guard.service';
import { MockSettingsService } from './mocks/mock-settings.service';
import { SettingsService } from '../settings/settings.service';

describe('AuthGuardService', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthGuardService,
        {
          provide: SettingsService,
          useClass: MockSettingsService
        }
      ]
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
