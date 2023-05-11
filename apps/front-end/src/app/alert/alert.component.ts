import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SuccessMessage } from '../models/success-message';
import { AlertService } from '../services/shared/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  messages$: Observable<SuccessMessage[]> = of([]);
  constructor(private alertService: AlertService) {
    this.messages$ = this.alertService.alertsMessages$;
  }

  public hideAlert(): void {
    this.alertService.clearMessages();
  }
}
