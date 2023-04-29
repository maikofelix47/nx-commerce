import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { nestBaseUrl } from '../../../environment';
import { Observable } from 'rxjs';
import { CreateCategoryPayload } from '../models/category';

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    const url = nestBaseUrl + '/category';
    return this.http.get(url);
  }
  createCategory(payload: CreateCategoryPayload) {
    const url = nestBaseUrl + '/category';
    return this.http.post(url, payload);
  }
}
