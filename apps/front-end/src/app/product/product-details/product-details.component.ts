import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductDetailsService } from '../../services/product-details.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';

import { Product } from '../../models/product';
import { CartItem } from '../../../app/models/shopping-cart';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    public product:Product[] = [];
    public quantity = 1;
    public hideCartButton = false;
    public cart: CartItem[] = [];
    public productId!: number;
    constructor(private productDetailsService: ProductDetailsService,
      private route: ActivatedRoute,
      private cartService: ShoppingCartService){

    }
    public ngOnInit(): void {
       this.route.paramMap.subscribe((params: ParamMap)=> {
             if(params){
                 this.productId = Number(params.get('id'));
                 this.getProductDetails(this.productId);
                
             }
       });
      
    }
    public getProductDetails(productId: number){
        this.productDetailsService.getProductById(productId).subscribe((product: Product[])=> {
           this.product = product;
           this.getCart();
           this.toggleAddToCartButton();
        });;
    }

    public addToCart(product: Product, quantity: number): void{
       this.cartService.addItemsToCart(product,quantity);
       this.hideCartButton = true;
       this.getCart();
    }
    public getCart(){
      this.cart = this.cartService.getCart();
    }
    public toggleAddToCartButton(){
        const hasProduct = this.cart.some((item: CartItem)=> {
              return item.productId === this.productId; 
        });
        this.hideCartButton = hasProduct;
    }
}
