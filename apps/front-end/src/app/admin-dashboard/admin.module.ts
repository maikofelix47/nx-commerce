import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { NavbarModule } from '../navbar/navbar.module';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { AdminProductComponent } from './product/product.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { SubCategoryListComponent } from './sub-categories/sub-category-list/sub-category-list.component';
import { CreateSubCategoryComponent } from './sub-categories/create-sub-category/create-sub-category.component';
import { AlertModule } from '../alert/alert.module';
import { AdminProductListComponent } from './product/admin-product-list/admin-product-list.component';
import { TableListModule } from '../table-list/table-list.module';
@NgModule({
  declarations: [
    AdminComponent,
    CreateCategoryComponent,
    CategoryListComponent,
    AdminProductComponent,
    CreateProductComponent,
    SubCategoriesComponent,
    SubCategoryListComponent,
    CreateSubCategoryComponent,
    AdminProductListComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    NgMaterialModule,
    NavbarModule,
    AlertModule,
    TableListModule
  ],
})
export class AdminModule {}
