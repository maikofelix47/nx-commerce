import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateProductComponent } from './create-product.component';
import { CategoryService } from '../../../services/category.service';
import { SubCategoryService } from '../../../services/sub-category.service';
import { ProductsService } from '../../../services/products.service';
import { AlertService } from '../../../services/shared/alert.service';
import { SettingsService } from '../../../settings/settings.service';

describe('CreateProductComponent', () => {
  let component: CreateProductComponent;
  let fixture: ComponentFixture<CreateProductComponent>;
  let categoryService: CategoryService;
  let subCategoryService: SubCategoryService;
  let productsService: ProductsService;
  let alertService: AlertService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        CategoryService,
        SubCategoryService,
        ProductsService,
        AlertService,
        SettingsService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProductComponent);
    categoryService = TestBed.inject(CategoryService);
    subCategoryService = TestBed.inject(SubCategoryService);
    productsService = TestBed.inject(ProductsService);
    alertService = TestBed.inject(AlertService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
