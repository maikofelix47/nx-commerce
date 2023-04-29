import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  public searchText: string = '';

  constructor(){

  }

  public search(){
    const searchText = this.searchText;
  }



}
