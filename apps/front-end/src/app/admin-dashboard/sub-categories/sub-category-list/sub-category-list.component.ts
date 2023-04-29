import { Component, OnInit } from '@angular/core';
import { SubCategory } from '../../../models/sub-category';
import { SubCategoryService } from '../../../services/sub-category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sub-category-list',
  templateUrl: './sub-category-list.component.html',
  styleUrls: ['./sub-category-list.component.css'],
})
export class SubCategoryListComponent implements OnInit {
  subCategoryList$!: Observable<SubCategory[]>;
  public displayedColumns: string[] = ['id', 'name','category' ,'description', 'action'];

  constructor(private subCategoryService: SubCategoryService) {}

  ngOnInit(): void {
    this.getAllSubCategories();
  }
  getAllSubCategories() {
    this.subCategoryList$ = this.subCategoryService.getAllSubCategories();
  }
}
