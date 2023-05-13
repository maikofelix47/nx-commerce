import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { Product } from '../models/product';

import { SettingsService } from '../settings/settings.service';

@Injectable()
export class ProductsService {
  constructor(
    private http: HttpClient,
    private settingsService: SettingsService
  ) {}

  getProductByCategoryId(categoryId: number): Observable<Product[]> {
    const url = this.getProductUrl() + `/category/${categoryId}`;
    return this.http.get<Product[]>(url).pipe(
      map((results: any) => {
        const products: Product[] = Object.values(results);

        return products;
      })
    );
  }

  private getProductUrl(): string {
    return this.settingsService.getBaseUrl() + '/product';
  }

  createProduct(product: any): Observable<Product> {
    const url = this.getProductUrl();
    return this.http.post<Product>(url, product);
  }

  getProducts(): Observable<Product[]> {
    const url = this.getProductUrl();
    return this.http.get<Product[]>(url).pipe(shareReplay());
  }

  getProductsBySubCategoryId(subCategoryId: number): Observable<Product[]> {
    const url = this.getProductUrl() + `/sub-category/${subCategoryId}`;
    return this.http.get<Product[]>(url);
  }
}
