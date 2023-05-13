import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NgMaterialModule } from '../../ng-material/ng-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminProductComponent } from './product.component';


@Component({
  selector: 'app-create-product'
})
class CreateProductComponent{
}

@Component({
  selector: 'app-admin-product-list'
})
class AdminProductListComponent{
}

describe('ProductComponent', () => {
  let component: AdminProductComponent;
  let fixture: ComponentFixture<AdminProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductComponent,AdminProductListComponent,CreateProductComponent],
      imports:[
        NgMaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
