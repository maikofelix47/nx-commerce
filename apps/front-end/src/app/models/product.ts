import { Media } from './media';

export interface Product {
  name: string;
  id: number;
  categoryId: number;
  price: number;
  inStock: number;
  productImg: string;
  rating: number;
  subCategoryId: number;
  description: string;
  media: Media[];
}

export interface CreateProductPayload {
  name: string;
  id: number;
  categoryId: number;
  price: number;
  inStock: number;
  productImg: string;
  rating: number;
  subCategoryId: number;
  description: string;
  file: {
    name: string;
    lastModilfied: number;
    size: number;
    type: string;
  };
}
