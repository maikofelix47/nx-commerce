import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category.service';
import { SubCategoryService } from '../../../services/sub-category.service';
import { SubCategory } from '../../../models/sub-category';
import { AlertService } from '../../../services/shared/alert.service';
import { SuccessMessage } from '../../../models/success-message';

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
    private subCategoryService: SubCategoryService,
    private alertService: AlertService
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
      .subscribe((response: SubCategory) => {
        const successMessage: SuccessMessage = {
          message: `Subcategory ${response.name} has successfully been created`
        };
        this.alertService.alert(successMessage);
        this.createSubCategoryForm.reset();
      });
  }
}
