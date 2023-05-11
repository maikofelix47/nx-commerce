import { Injectable } from '@angular/core';
import { nestBaseUrl } from '../../../environment';
import { SubCategory } from '../models/sub-category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class SubCategoryService {
  private url = nestBaseUrl + '/sub-category';

  constructor(private http: HttpClient) {}

  getAllSubCategories(): Observable<SubCategory[]> {
    return this.http.get<SubCategory[]>(this.url);
  }

  createSubCategory(
    createSubCategoryPayload: SubCategory
  ): Observable<SubCategory> {
    return this.http.post<SubCategory>(this.url, createSubCategoryPayload);
  }
  getSubCategoriesByCategoryId(categoryId: string) {
    const subUrl = this.url + `/category/${categoryId}`;
    return this.http.get<SubCategory[]>(subUrl);
  }
}
