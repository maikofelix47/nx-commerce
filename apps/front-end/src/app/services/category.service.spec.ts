import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CategoryService } from './category.service';
import { SettingsService } from '../settings/settings.service';

class MockSettingsService{
  getBaseUrl(){
    return 'http://localhost/api';
  }
}

describe('CategoryService', () => {
  let categoryService: CategoryService;
  let settingsService: SettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[
        CategoryService,
        {
          provide: SettingsService,
          useClass: MockSettingsService
        }
      ]
    });
    categoryService = TestBed.inject(CategoryService);
  });

  it('should be created', () => {
    expect(categoryService).toBeTruthy();
  });
});
