import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../services/auth.service';
import { ErrorService } from '../services/shared/error.service';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceSpy;
  let errorServiceSpy;

  beforeEach(async () => {
    authServiceSpy = jest.fn();
    errorServiceSpy = jest.fn();
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers:[
        {
          provide: AuthService,
          useValue: authServiceSpy
        },
        {
          provide: ErrorService,
          useValue: errorServiceSpy
        }
      ],
      imports:[
        NgMaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
