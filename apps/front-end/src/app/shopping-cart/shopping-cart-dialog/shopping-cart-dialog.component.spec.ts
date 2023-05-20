import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgMaterialModule } from '../../ng-material/ng-material.module';
import { ShoppingCartDialogComponent } from './shopping-cart-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ShoppingCartDialogComponent', () => {
  let component: ShoppingCartDialogComponent;
  let fixture: ComponentFixture<ShoppingCartDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgMaterialModule, FormsModule, BrowserAnimationsModule],
      declarations: [ShoppingCartDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingCartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
