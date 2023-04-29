import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoaderService {

  private loaderSubj = new Subject<boolean>();
  public loderObs$ = this.loaderSubj.asObservable();

  constructor() { }

  public showLoader(){
     this.loaderSubj.next(true);
  }
  public hideLoader(){
     this.loaderSubj.next(false);
  }


}
