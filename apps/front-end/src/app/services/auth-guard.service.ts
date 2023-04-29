import { Injectable } from '@angular/core';
import  {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from '@angular/router';

import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree{
    const isAuthorized =  this.authService.isAuthorized();
    if(isAuthorized){
        return true;
    }else{
      // Redirect to the login page
      return this.router.parseUrl('/login');
    }

  }
}
