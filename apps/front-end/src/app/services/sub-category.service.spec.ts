import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SubCategoryService } from './sub-category.service';
import { SettingsService } from '../settings/settings.service';

describe('SubCategoryService', () => {
  let service: SubCategoryService;
  let settingsService: SettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers:[
        SubCategoryService,
        SettingsService
      ]
    });
    service = TestBed.inject(SubCategoryService);
    settingsService = TestBed.inject(SettingsService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
