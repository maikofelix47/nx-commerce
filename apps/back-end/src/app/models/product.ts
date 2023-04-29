
export interface Product{
    id: number;
    name: string;
    categoryId: number;
    price: number;
    inStock: number;
    productImg: string;
    rating: number;
    uuid: string;
    createdAt: Date;
    updatedAt: Date;
}