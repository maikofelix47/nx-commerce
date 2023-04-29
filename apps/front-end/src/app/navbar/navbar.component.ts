import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ShoppingCartService } from '../services/shopping-cart.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  public itemsInCart$!: Observable<number>;
  public loggedInUser: any;

  constructor(private cartService: ShoppingCartService,
    private authService: AuthService,
    private router: Router){

  }

  public ngOnInit(): void {
    this.getLoggedInUser();
    this.getItemsInCart();
  }
  
  public getItemsInCart(){
      this.itemsInCart$= this.cartService.getItemsInCart();
  }
  private getLoggedInUser(){
      this.loggedInUser = this.authService.getSignedInUser();
  }
  public logOut(){
    this.authService.logout();
    this.getLoggedInUser();
    this.router.navigate(['/']);
  }


}
