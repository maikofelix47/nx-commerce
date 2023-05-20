import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailsService } from '../../services/product-details.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SettingsService } from '../../settings/settings.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let productDetailsService: ProductDetailsService;
  let shoppingcartService: ShoppingCartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ ProductDetailsComponent ],
      providers: [
        ProductDetailsService,
        ShoppingCartService,
        SettingsService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    productDetailsService = TestBed.inject(ProductDetailsService);
    shoppingcartService = TestBed.inject(ShoppingCartService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
