import { Component, signal } from '@angular/core';
import { RxjxBasics } from './rxjx-basics/rxjx-basics';

@Component({
  selector: 'app-root',
  imports: [RxjxBasics],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('rxjx-angular-18');
}
