import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProductsService } from '../services/products.service';
import { ShoppingCartService } from '../services/shopping-cart.service';

import { Product } from '../models/product';
import { LoaderService } from '../services/loader.service';

import { ProductFilterParams } from '../models/product-filter';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
 public products: Product[] = [];
 public quantity: number = 1;
 public filterParams: ProductFilterParams = {
   minPrice: 0,
   maxPrice: 0,
   rating: 0,
 };
 public filteredProducts: Product[] = [];


  constructor(private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: ShoppingCartService,
    private loaderService:LoaderService){

  }


  public ngOnInit(): void {
     this.route.paramMap.subscribe((params: ParamMap)=> {
        if(params){
            const subCategoryId = params.get('subCategoryId');
            this.getProductsBySubCategoryId(Number(subCategoryId));
        }
     });

     this.route.queryParams.subscribe((params: any)=> {
        if(params){
           this.filterParams = params;
           this.filterProducts();
        }
     });
  }

  getProductsBySubCategoryId(categoryId: number){
     this.showLoader();
     this.productService.getProductsBySubCategoryId(categoryId)
     .subscribe((products: Product[])=> {
        this.products = products;
        this.filterProducts();
        this.hideLoader();
     });
  }

  viewProduct(productId: number): void{
       this.router.navigate(['./product/', productId]);
  }

  addToCart(product: Product,quantity: number){

   this.cartService.addItemsToCart(product,quantity);

  }
  public showLoader(){
    this.loaderService.showLoader();
  }
  public hideLoader(){
     this.loaderService.hideLoader();
  }
  private filterProducts(){
   const filterParams = this.filterParams;
     if('maxPrice' in filterParams){

      this.filteredProducts = this.products.filter((product: Product)=> {
           return (product.price >= filterParams.minPrice 
           && product.price <= filterParams.maxPrice
           && product.rating >= filterParams.rating)
      });

     }else{
        this.filteredProducts = this.products;
     }
     
  }

}
