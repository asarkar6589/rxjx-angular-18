import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjx-basics',
  imports: [],
  templateUrl: './rxjx-basics.html',
  styleUrl: './rxjx-basics.scss'
})
export class RxjxBasics {
  // Basic ways of creating constructor. Make sure to add $ at the last of any observable varibale name. It's generally a standard that is followed in a project.

  constructor() {
    // Simplest Observable. Now if we are creating a basic observable, it will not emit the data automatically. We have to use the next() function.
    const myObservable$ = new Observable(value => {
      value.next("This is a basic observable");
    });

    // Now to read the value from this observable, we have to subscribe it.
    myObservable$.subscribe((res) => {
      console.log(res);
    });
  }

  
}
