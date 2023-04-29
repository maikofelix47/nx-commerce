export interface Category {
  id?: number | string;
  name: string;
  description: string;
  featureImg?: string;
}

export interface CreateCategoryPayload {
  name: string;
  description: string;
}
