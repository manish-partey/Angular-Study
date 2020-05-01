import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp-component';
import { EmpDetailsComponent } from './emp/emp-details-component';
@NgModule({
    imports: [BrowserModule, FormsModule ],
    declarations: [AppComponent, EmpComponent, EmpDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
