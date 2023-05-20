import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartService } from '../services/shopping-cart.service';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgMaterialModule],
      providers: [ShoppingCartService],
      declarations: [ ShoppingCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
