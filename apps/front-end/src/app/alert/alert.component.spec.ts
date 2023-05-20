import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertComponent } from './alert.component';
import { AlertService } from '../services/shared/alert.service';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;
  let alertService: AlertService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertComponent ],
      providers: [AlertService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertComponent);
    alertService = TestBed.inject(AlertService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
