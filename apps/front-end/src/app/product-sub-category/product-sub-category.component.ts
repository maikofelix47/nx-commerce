import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SubCategoryService } from '../services/sub-category.service';
import { SubCategory } from '../models/sub-category';

@Component({
  selector: 'app-product-sub-category',
  templateUrl: './product-sub-category.component.html',
  styleUrls: ['./product-sub-category.component.css']
})
export class ProductSubCategoryComponent implements OnInit{

  subCategories$!: Observable<SubCategory[]>;
  subCategoryId: string = '';


  constructor(
    private subCategoryService: SubCategoryService,
    private route: ActivatedRoute,
    private router: Router){

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap)=> {
      if(params){
          const categoryId = params.get('id');
          if(categoryId){
            this.getProductSubCategories(categoryId);
          }
          
      }
   });
    
  }

  getProductSubCategories(categoryId: string){
    this.subCategories$ = this.subCategoryService.getSubCategoriesByCategoryId(categoryId);
  }

  goToProducts(subCategoryId: any){
      this.router.navigate([`/products/subcategory/${subCategoryId}`]);
  }

}
