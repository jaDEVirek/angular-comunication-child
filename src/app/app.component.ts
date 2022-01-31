import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="background-color: red; padding: 10px;">
    <div>{{counter}}</div>
    <button (click)="increment()">increment from parent</button>
    <app-child2 [counter]="counter" (counterChange)="test($event)"> </app-child2>
    <new-apper [counter]="counter"></new-apper>
  </div>
  `,
})
export class AppComponent {
  counter = 0;

  increment() {
    this.counter++;
  }
 
 

  test(event: any) {
    this.counter = event;
    console.log('test');
  }
}

@Component({
  selector: 'app-child2',
  template: `
  <div style="background-color: blue; padding: 10px; margin: 10px;">
    <div>{{counter}}</div>
    <button (click)="increment()">increment from child</button>
    <app-child [counter] = "counter" (counterChanges)="runChange($event)"></app-child>
  </div>
  `,
})
export class ChildComponent2 {
  @Input() counter: number;
  @Output() counterChange = new EventEmitter<number>();

  constructor() {}

  increment() {
    this.counterChange.emit(++this.counter);
  }

  runChange(event: any) {
    this.counterChange.emit(event);
  }
}

@Component({
  selector: 'app-child',
  template: `
  <div style="background-color: green; padding: 10px; margin: 10px;">
    <div>{{counter}}</div>
    <button (click)="increment()">increment from child</button>
  </div>
  `,
})
export class ChildComponent {
  @Input() counter: number;
  @Output() counterChanges = new EventEmitter<number>();

  constructor() {}

  increment() {
    this.counterChanges.emit(++this.counter);
  }
}

@Component({
  selector: 'new-apper',
  template: `
  <div style="background-color: yellow; padding: 10px; margin: 10px;">
    <div>{{counter}}</div>
  </div>
  `,
})
export class NewApper {
  @Input() counter: number;

  constructor() {}
}
