import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateCategoryPayload } from '../models/category';
import { SettingsService } from '../settings/settings.service';

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient,
    private settingsService: SettingsService) {}

  getAll(): Observable<any> {
    const url = this.settingsService.getBaseUrl() + '/category';
    return this.http.get(url);
  }
  createCategory(payload: CreateCategoryPayload) {
    const url = this.settingsService.getBaseUrl() + '/category';
    return this.http.post(url, payload);
  }
}
