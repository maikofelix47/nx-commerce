import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductDetailsService } from './product-details.service';
import { SettingsService } from '../settings/settings.service';

describe('ProductDetailsService', () => {
  let service: ProductDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[
        ProductDetailsService,
        SettingsService
      ]
    });
    service = TestBed.inject(ProductDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
