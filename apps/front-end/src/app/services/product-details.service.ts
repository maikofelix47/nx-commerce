import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { nestBaseUrl } from '../../../environment';

@Injectable()
export class ProductDetailsService {
  constructor(private http: HttpClient) {}

  getProductById(productId: number): Observable<any> {
    const url = nestBaseUrl + `/product/${productId}`;
    return this.http.get(url);
  }
}
