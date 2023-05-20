import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductSubCategoryComponent } from './product-sub-category.component';
import { SettingsService} from '../settings/settings.service';

describe('ProductSubCategoryComponent', () => {
  let component: ProductSubCategoryComponent;
  let fixture: ComponentFixture<ProductSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ ProductSubCategoryComponent ],
      providers: [SettingsService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
