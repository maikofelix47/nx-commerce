import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category.service';
import { SubCategoryService } from '../../../services/sub-category.service';
import { SubCategory } from '../../../models/sub-category';

@Component({
  selector: 'app-create-sub-category',
  templateUrl: './create-sub-category.component.html',
  styleUrls: ['./create-sub-category.component.css'],
})
export class CreateSubCategoryComponent implements OnInit {
  public categories$!: Observable<Category[]>;

  public createSubCategoryForm = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true }),
    description: new FormControl<string>('', { nonNullable: true }),
    categoryId: new FormControl<number>(0, { nonNullable: true }),
  });

  constructor(
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categories$ = this.categoryService.getAll();
  }

  public submitData() {
    const formData = this.createSubCategoryForm.value;
    const payLoad: SubCategory = {
      name: formData?.name || '',
      description: formData?.description || '',
      categoryId: Number(formData?.categoryId) || 0,
    };

    this.subCategoryService
      .createSubCategory(payLoad)
      .subscribe((response: any) => {
        this.createSubCategoryForm.reset();
      });
  }
}
