import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubCategoryComponent } from './create-sub-category.component';

describe('CreateSubCategoryComponent', () => {
  let component: CreateSubCategoryComponent;
  let fixture: ComponentFixture<CreateSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubCategoryComponent ]
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
