import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSubCategoryComponent } from './product-sub-category.component';

describe('ProductSubCategoryComponent', () => {
  let component: ProductSubCategoryComponent;
  let fixture: ComponentFixture<ProductSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSubCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
