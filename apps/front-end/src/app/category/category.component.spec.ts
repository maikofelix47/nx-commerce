import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CategoryComponent } from './category.component';
import { CategoryService } from '../services/category.service';
import { LoaderService } from '../services/loader.service';
import { ErrorService } from '../services/shared/error.service';
import { SettingsService } from '../settings/settings.service';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ CategoryComponent ],
      providers: [
        CategoryService,
        SettingsService,
        LoaderService,
        ErrorService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
