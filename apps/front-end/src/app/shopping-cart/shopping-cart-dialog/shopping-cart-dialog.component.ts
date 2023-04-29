import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShoppingCartService } from '../../services/shopping-cart.service';


@Component({
  selector: 'app-shopping-cart-dialog',
  templateUrl: './shopping-cart-dialog.component.html',
  styleUrls: ['./shopping-cart-dialog.component.css']
})
export class ShoppingCartDialogComponent {

  public productName: string = '';
  public unitPrice: number = 0;
  public quantity: number = 0;
  public errorMessages: {message: string}[] = [];
  public successMessages: {message: string}[] = [];


  constructor(
    public dialogRef: MatDialogRef<ShoppingCartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cartService: ShoppingCartService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateCart(){
     this.cartService.updateCart(this.data).then((result: any)=> {
         console.log('result', result);
         this.successMessages = [{
          message: result
         }];
     }).catch((error: Error)=> {
         console.log('error', error);
         this.errorMessages = [{
           message: error?.message || 'An error occured while updating cart. please try again'
         }]
     });
  }

}
