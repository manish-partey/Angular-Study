import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp-component';
import { EmpDetailsComponent } from './emp/emp-details-component';
import { EmpNameTransform } from "./emp/emp-component-custom"
import { EmployeCountComponent } from "./emp/empCount-component"
@NgModule({
    imports: [BrowserModule, FormsModule ],
    declarations: [AppComponent, EmpComponent, EmpDetailsComponent, EmpNameTransform, EmployeCountComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
