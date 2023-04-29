import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../models/product';
import { ColumnDefs } from '../../../models/table-list';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent  implements OnInit{

    public title = 'Product List';
    public displayedColumns: string[] = ['id', 'name' ,'price', 'inStock'];

    public columnDefs: ColumnDefs[] = [
      {
        columnDef: 'id',
        headerCellDef: 'No',
        matCellDef: 'id'
      },
      {
        columnDef: 'name',
        headerCellDef: 'Name',
        matCellDef: 'name'
      },
      {
        columnDef: 'price',
        headerCellDef: 'Price',
        matCellDef: 'price'
      },
      {
        columnDef: 'inStock',
        headerCellDef: 'In Stock',
        matCellDef: 'inStock'
      }
    ];

     products$: Observable<Product[]> = of([]);
     constructor(private productsService: ProductsService){
     }

     ngOnInit(): void {
       this.products$ = this.productsService.getProducts();
     }
}
