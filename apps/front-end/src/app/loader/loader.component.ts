import { Component, OnInit } from '@angular/core';

import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  public showLoader = false;

  constructor(private loaderService: LoaderService ){

  }

  public ngOnInit(): void {
     this.subScribeToLoaderService();
  }
  private subScribeToLoaderService(){
        this.loaderService.loderObs$.subscribe((loaderState: boolean)=> {
          this.showLoader = loaderState;
        });
  }

}
