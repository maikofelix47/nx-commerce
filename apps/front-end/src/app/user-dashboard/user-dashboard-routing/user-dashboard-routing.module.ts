import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MainDashboardComponent } from '../main-dashboard.component';
import { LandingComponent } from '../../landing/landing.component';
import { ProductComponent } from '../../product/product.component';
import { ProductDetailsComponent } from '../../product/product-details/product-details.component';
import { ShoppingCartComponent } from '../..//shopping-cart/shopping-cart.component';
import { AuthGuardService } from '../..//services/auth-guard.service';
import { CheckoutComponent } from '../../checkout/checkout.component';
import { AppreciationComponent } from '../../appreciation/appreciation.component';
import { ProductSubCategoryComponent } from '../../product-sub-category/product-sub-category.component';


const routes: Routes = [
  {
     path: '',
     component: MainDashboardComponent,
     children: [
      {
        path: '',
        component: LandingComponent
      },
      {
        path: 'products',
        component: ProductComponent,
      },
      {
        path: 'products/subcategory/:subCategoryId',
        component: ProductComponent,
      },
      {
        path: 'category/:id',
        component: ProductSubCategoryComponent,
        title: 'Category'
      },
      {
        path: 'product/:id',
        component: ProductDetailsComponent,
        title: 'Product Details'
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent,
        title: 'Shopping Cart',
        canActivate: [AuthGuardService]
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        title: 'Check Out',
        canActivate: [AuthGuardService]
      },
      {
        path: 'appreciation',
        component: AppreciationComponent,
        title: 'Thank You'
      }
     ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
