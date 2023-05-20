import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateCategoryComponent } from './create-category.component';
import { CategoryService } from '../../../services/category.service';
import { SettingsService } from '../../../settings/settings.service';

describe('CreateCategoryComponent', () => {
  let component: CreateCategoryComponent;
  let fixture: ComponentFixture<CreateCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ CreateCategoryComponent ],
      providers: [
        CategoryService,
        SettingsService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
