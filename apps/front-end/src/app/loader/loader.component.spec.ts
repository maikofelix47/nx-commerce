import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderComponent } from './loader.component';
import { LoaderService } from '../services/loader.service';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  let loaderService: LoaderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderComponent ],
      providers: [LoaderService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderComponent);
    loaderService = TestBed.inject(LoaderService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
