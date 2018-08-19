import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<button (click)="increment()">Increment</button>
  <button (click)="decrement()">Decrement</button>
  <p>The counter: {{counter}}</p>`
})
export class AppComponent {
  public counter: number = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
