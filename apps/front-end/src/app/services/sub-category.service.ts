import { Injectable } from '@angular/core';
import { SubCategory } from '../models/sub-category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SettingsService } from '../settings/settings.service';

@Injectable({
  providedIn: 'root',
})
export class SubCategoryService {
  constructor(
    private http: HttpClient,
    private settingsService: SettingsService
  ) {}

  private getBaseUrl(): string {
    return this.settingsService.getBaseUrl() + '/sub-category';
  }

  getAllSubCategories(): Observable<SubCategory[]> {
    return this.http.get<SubCategory[]>(this.getBaseUrl());
  }

  createSubCategory(
    createSubCategoryPayload: SubCategory
  ): Observable<SubCategory> {
    return this.http.post<SubCategory>(
      this.getBaseUrl(),
      createSubCategoryPayload
    );
  }
  getSubCategoriesByCategoryId(categoryId: string) {
    const subUrl = this.getBaseUrl() + `/category/${categoryId}`;
    return this.http.get<SubCategory[]>(subUrl);
  }
}
