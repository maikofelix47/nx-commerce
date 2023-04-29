import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { ProductFilterParams } from '../../models/product-filter';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {

  public minPrice = 0;
  public maxPrice = 200000;
  public rating = 1;

  constructor(private router: Router){

  }

  public applyFilter(){
    const filterParams: ProductFilterParams = {
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      rating: this.rating
    };

   this.router.navigate([], {queryParams: filterParams});
  }

}
