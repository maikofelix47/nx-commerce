import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public categoryList: Category[] = [];
  public displayedColumns: string[] = ['id', 'name', 'description' ,'featureImg', 'action'];

  constructor(private categoryService: CategoryService){

  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
     this.categoryService.getAll().subscribe((result: any)=> {
        this.categoryList = result;
     });
  }

}
