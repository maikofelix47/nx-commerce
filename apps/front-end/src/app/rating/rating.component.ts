import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, OnChanges {

   @Input() rating: number = 0;
   @Input() maxRating: number = 5;

   public stars: number[] = new Array(this.maxRating).fill(0);
   constructor(){

   }

   public ngOnInit(): void {
     
   }
   public ngOnChanges(changes: SimpleChanges): void {
      const { maxRating } = changes;
      if(maxRating.currentValue !== null){
          this.setStars(maxRating.currentValue);
      }
   }
   public setStars(maxStars: number){
      this.stars = new Array(this.maxRating).fill(0);
   }

   
}
