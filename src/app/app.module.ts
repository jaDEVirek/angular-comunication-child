import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent, ChildComponent, ChildComponent2,NewApper } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ChildComponent2,ChildComponent, NewApper ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
