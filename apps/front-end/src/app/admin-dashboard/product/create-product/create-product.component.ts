import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from '../../../models/category';
import { SubCategory } from '../../../models/sub-category';
import { CategoryService } from '../../../services/category.service';
import { SubCategoryService } from '../../../services/sub-category.service';
import { ProductsService } from '../../../services/products.service';
import { AlertService } from '../../../services/shared/alert.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  categories$!: Observable<Category[]>;
  subCategories$!: Observable<SubCategory[]>;

  public createProductForm = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true }),
    description: new FormControl<string>('', { nonNullable: true }),
    categoryId: new FormControl<number>(0, { nonNullable: true }),
    subCategoryId: new FormControl<number>(0, { nonNullable: true }),
    price: new FormControl<number>(0, { nonNullable: true }),
    inStock: new FormControl<number>(0, { nonNullable: true }),
    featureImg: new FormControl<any | null>(''),
    file: new FormControl<any | null>(''),
  });

  constructor(
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private productsService: ProductsService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categories$ = this.categoryService.getAll();
  }
  onCategorySelect() {
    const categoryId = this.createProductForm.get('categoryId')?.value;
    if (categoryId) {
      this.subCategories$ =
        this.subCategoryService.getSubCategoriesByCategoryId(
          categoryId.toString()
        );
    }
  }
  onFileChange($event: any) {
    if ($event.target.files.length) {
      const file = $event.target.files[0] || '';

      this.createProductForm.patchValue({
        file: file,
      });
    }
  }
  submitData() {
    const formData = new FormData();
    Object.keys(this.createProductForm.controls).forEach(
      (formControlName: string) => {
        formData.append(
          formControlName,
          this.createProductForm.get(formControlName)?.value
        );
      }
    );

    this.productsService.createProduct(formData).subscribe((result) => {
      const message = 'Product Succesfully Created';
      this.alertService.alert({
        message,
      });
      this.createProductForm.reset();
    });
  }
}
