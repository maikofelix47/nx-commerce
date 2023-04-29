import { Component, OnInit } from '@angular/core';

import { ErrorMessage } from '../models/error-messages';

import { ErrorService } from '../services/shared/error.service';



@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  
  public errors: ErrorMessage[] = [];

  constructor(private errorService: ErrorService){

  }

  public ngOnInit(): void {
     this.errorService.$errors.subscribe((errors: ErrorMessage[])=> {
         this.errors = errors;

     })
  }
  

  

}
