import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateSubCategoryComponent } from './create-sub-category.component';
import { CategoryService } from '../../../services/category.service';
import { SettingsService } from '../../../settings/settings.service';
import { AlertService } from '../../../services/shared/alert.service';
import { SubCategoryService } from '../../../services/sub-category.service';

describe('CreateSubCategoryComponent', () => {
  let component: CreateSubCategoryComponent;
  let fixture: ComponentFixture<CreateSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ CreateSubCategoryComponent ],
      providers: [
        CategoryService,
        SubCategoryService,
        SettingsService,
        AlertService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
