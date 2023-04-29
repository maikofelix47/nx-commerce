import { Component, Input } from '@angular/core';
import { ColumnDefs } from '../models/table-list';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent {

  @Input() title: string = '';
  @Input() public dataSource: any;
  @Input() public columnDefs: ColumnDefs[] = [];
  @Input() public displayedColumns: string[] = [];

}
