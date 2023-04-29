import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';

import { CreateCategoryPayload } from '../../../models/category';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
})
export class CreateCategoryComponent implements OnInit {
  createCategoryForm = new FormGroup({
    name: new FormControl<string>(''),
    description: new FormControl<string>(''),
  });

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    console.log('loaded category component...');
  }

  submitCategoryData() {
    const categoryPayload: CreateCategoryPayload = this.createCategoryForm
      .value as unknown as CreateCategoryPayload;

    this.categoryService.createCategory(categoryPayload).subscribe(
      (result: any) => {
        console.log('result', result);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
