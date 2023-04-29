import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SuccessMessage } from '../../models/success-message';

@Injectable()
export class AlertService {

  private alertSub = new BehaviorSubject<SuccessMessage[]>([]);
  alertsMessages$ = this.alertSub.asObservable();
   
  constructor() { }

  alert(...message: SuccessMessage[]){
     this.alertSub.next(message);
  }
  clearMessages(){
    this.alertSub.next([]);
  }
}
