import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListComponent } from './table-list.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';


@NgModule({
  declarations: [
    TableListComponent
  ],
  imports: [
    CommonModule,
    NgMaterialModule
  ],
  exports: [TableListComponent]
})
export class TableListModule { }
