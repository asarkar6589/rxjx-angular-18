import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';

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

    this.cityList$.subscribe((res: string[]) => {
      console.log(res);
    });

    // It will execute for 3 times.
    this.cityList2$.subscribe((res: string) => {
      console.log(res);
    });
  }

  // Here we will be making a reactive variable. Let's say one eg of a non reactive variable.
  cityList: string[] = ["koaa", "pune", "bombay"];

  // Now if i want to make the above variable as reactive varibale, then we can make use of observable & store the data inside it. For that we have to use 'of' operator. Now cityList$ is an observable & we can subscribe it to get the data.
  cityList$ = of(["koaa", "pune", "bombay"]); // it will emit all the data in one go

  // now here i want to make a variable stateList$. But here i dont want all the data in one go. I want that whatever number of data i have in my variable, that many times my subscribe() function should execute. I want one by one element (just like a for loop)
  cityList2$ = from(["koaa", "pune", "bombay"]); // it will emit the data one by one.
}
