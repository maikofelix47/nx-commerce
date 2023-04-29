import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { CategoryService } from '../services/category.service';
import { LoaderService } from '../services/loader.service';
import { ErrorService } from '../services/shared/error.service';

interface Category{
  name: string;
  featureImg: string;
  id: number;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  public categories: Category[] = [];

  constructor(private categoryService: CategoryService, 
    private router: Router,
    private loaderService: LoaderService,
    private errorService: ErrorService){

  }

  public ngOnInit(): void {
    this.getCategories();
  }

  public getCategories(){
     this.showLoader();
     this.categoryService.getAll().subscribe((categories: any)=> {
         this.categories = categories;
         this.hideLoader();
     },(error: Error)=> {
        this.errorService.handleError(error);
        this.hideLoader();
     });
  }

  public goToCategory(categoryId: number){
     this.router.navigate([`/category/${categoryId}`]);
  }
  public showLoader(){
    this.loaderService.showLoader();
  }
  public hideLoader(){
     this.loaderService.hideLoader();
  }

}
