import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductComponent } from './product.component';
import { ProductsService } from '../services/products.service';
import { SettingsService } from '../settings/settings.service';
import { LoaderService } from '../services/loader.service';
import { Component } from '@angular/core';

@Component(
  {
    selector:'app-product-filter'
  }
)
class ProductFilterComponent{

}

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ ProductComponent, ProductFilterComponent ],
      providers: [
        ProductsService,
        SettingsService,
        LoaderService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
