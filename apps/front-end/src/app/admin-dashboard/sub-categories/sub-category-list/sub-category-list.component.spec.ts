import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SubCategoryListComponent } from './sub-category-list.component';
import { SettingsService } from '../../../settings/settings.service';

describe('SubCategoryListComponent', () => {
  let component: SubCategoryListComponent;
  let fixture: ComponentFixture<SubCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ SubCategoryListComponent ],
      providers: [SettingsService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
