import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp-component';
@NgModule({
    imports: [BrowserModule, FormsModule ],
    declarations: [AppComponent, EmpComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
