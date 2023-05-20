import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdminProductListComponent } from './admin-product-list.component';
import { SettingsService } from '../../../settings/settings.service';
import { TableListModule } from '../../../table-list/table-list.module';
import { ProductsService } from '../../../services/products.service';

describe('AdminProductListComponent', () => {
  let component: AdminProductListComponent;
  let fixture: ComponentFixture<AdminProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,TableListModule],
      declarations: [ AdminProductListComponent ],
      providers:[ProductsService,SettingsService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
