import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin.component';
import { CreateCategoryComponent } from '../category/create-category/create-category.component';
import { AuthGuardService } from '../../services/auth-guard.service';
import { AdminProductComponent } from '../product/product.component';
import { SubCategoriesComponent } from '../sub-categories/sub-categories.component';
import { AdminLandingComponent } from '../admin-landing/admin-landing.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: AdminLandingComponent,
        title: 'Admin Landing Page'
      },
      {
        path: 'category',
        component: CreateCategoryComponent,
        title: 'Create Category',
      },
      {
        path: 'product',
        component: AdminProductComponent,
        title: 'Products',
      },
      {
        path: 'sub-category',
        component: SubCategoriesComponent,
        title: 'Sub-Categories',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
