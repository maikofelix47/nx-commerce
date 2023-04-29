import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertService } from '../services/shared/alert.service';
import { NgMaterialModule } from '../ng-material/ng-material.module';


@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    NgMaterialModule
  ],
  providers: [AlertService],
  exports: [AlertComponent]
})
export class AlertModule { }
