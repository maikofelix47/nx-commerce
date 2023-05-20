import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CategoryService } from '../../../services/category.service';
import { CategoryListComponent } from './category-list.component';
import { SettingsService } from '../../../settings/settings.service';

describe('CategoryListComponent', () => {
  let component: CategoryListComponent;
  let fixture: ComponentFixture<CategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ CategoryListComponent ],
      providers: [
        CategoryService,
        SettingsService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
