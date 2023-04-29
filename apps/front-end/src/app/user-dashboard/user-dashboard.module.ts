import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardRoutingModule } from './user-dashboard-routing/user-dashboard-routing.module';

import { MainDashboardComponent } from './main-dashboard.component';
import { LandingComponent } from '../landing/landing.component';
import { ProductComponent } from '../product/product.component';
import { ProductDetailsComponent } from '../product/product-details/product-details.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { CheckoutComponent } from '../checkout/checkout.component';
import { AppreciationComponent } from '../appreciation/appreciation.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from '../rating/rating.component';
import { ProductsService } from '../services/products.service';
import { MainBannerComponent } from '../main-banner/main-banner.component';
import { CategoryComponent } from '../category/category.component';
import { ProductFilterComponent } from '../product/product-filter/product-filter.component';
import { NavbarModule } from '../navbar/navbar.module';
import { ProductSubCategoryComponent } from '../product-sub-category/product-sub-category.component';


@NgModule({
  declarations: [
    MainDashboardComponent,
    LandingComponent,
    ProductComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    AppreciationComponent,
    RatingComponent,
    MainBannerComponent,
    CategoryComponent,
    ProductFilterComponent,
    ProductSubCategoryComponent
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    NgMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule
  ],
  providers: [AuthGuardService, ProductsService]
})
export class UserDashboardModule { }
