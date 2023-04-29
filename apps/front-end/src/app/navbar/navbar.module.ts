import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NgMaterialModule,
    RouterModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
