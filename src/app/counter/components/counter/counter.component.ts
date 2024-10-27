import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h2> Counter: {{ counter }}</h2>
  <button (click)="increasedBy(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increasedBy(-1)">-1</button>
  `
})
export class CounterComponent{
  public counter: number = 10;

  increasedBy(value: number) {
    this.counter += value;
  }
  resetCounter (){
    this.counter = 10;
  }
  constructor(){

  }

}
