import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ShoppingCartService } from '../services/shopping-cart.service';
import { Cart, CartItem } from '../models/shopping-cart';
import { ShoppingCartDialogComponent } from './shopping-cart-dialog/shopping-cart-dialog.component';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  public displayedColumns: string[] = ['productId','productName', 'unitPrice', 'quantity', 'total' ,'edit'];
  public cart!: Cart;
  public cartItems: CartItem[] = [];
  public totalCost = 0;

  constructor(private cartService: ShoppingCartService, 
    private dialog: MatDialog,
    private router: Router){

  }

  public ngOnInit(): void {
    this.getCart();
  }

  public onRowClick(row: any){
  }
  public editCartItem(element: any){
    this.openDialog(element);
  }
  public removeCartItem(element: any){
    this.cartItems = this.cartItems.filter((item: CartItem)=> {
         return item.productId !== element.productId;
    });
    this.cartService.setCart(this.cartItems);
  }
  public getCart(){
      this.cartItems = this.cartService.getCart();
  }
  public openDialog(element: any): void {
    const dialogRef = this.dialog.open(ShoppingCartDialogComponent, {
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  public getTotalCost() {
    this.totalCost = this.cartItems.map((t:CartItem) => t.unitPrice * t.quantity).reduce((acc, value) => acc + value, 0);
    return this.totalCost;
  }

  public checkout(){
    this.router.navigate(['/checkout']);
  }


}
