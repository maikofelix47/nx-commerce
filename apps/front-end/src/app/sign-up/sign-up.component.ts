import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

import { ErrorMessage } from '../models/error-messages';
import { ErrorService } from '../services/shared/error.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  public email = '';
  public password = '';
  public userName = '';

  constructor(
    private authService: AuthService,
    private errorService: ErrorService,
    private router: Router
  ) {}

  public signUp() {
    this.authService.signUp(this.userName,this.email, this.password).subscribe(
      (result: any) => {
        this.router.navigate(['/login']);
      },
      (error: ErrorMessage[]) => {
        this.errorService.setNewErrorMessage({
          message:
            error[0]?.message || 'Sign up was Unsuccessfull, please try agin',
        });
      }
    );
  }
}
