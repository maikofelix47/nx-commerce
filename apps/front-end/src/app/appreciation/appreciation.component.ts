import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appreciation',
  templateUrl: './appreciation.component.html',
  styleUrls: ['./appreciation.component.css']
})
export class AppreciationComponent {

  constructor(private router: Router){

  }

  public navigateToHome(){
     this.router.navigate(['/']);
  }

}
