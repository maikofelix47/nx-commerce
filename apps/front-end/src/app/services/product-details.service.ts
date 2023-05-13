import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../settings/settings.service';

@Injectable()
export class ProductDetailsService {
  constructor(private http: HttpClient,private settingsService: SettingsService) {}

  getProductById(productId: number): Observable<any> {
    const url = this.settingsService.getBaseUrl() + `/product/${productId}`;
    return this.http.get(url);
  }
}
