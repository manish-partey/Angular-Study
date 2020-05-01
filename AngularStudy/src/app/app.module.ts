import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp-component';
@NgModule({
  imports:      [ BrowserModule ],
    declarations: [AppComponent, EmpComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
