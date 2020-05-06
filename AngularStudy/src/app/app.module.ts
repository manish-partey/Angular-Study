import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp-component';
import { EmpDetailsComponent } from './emp/emp-details-component';
import { EmpNameTransform } from "./emp/emp-component-custom";
import { EmployeCountComponent } from "./emp/empCount-component";
import { OtherComponent } from "./other/other-component";

const appRoutes: Routes = [
    { path: 'home', component: OtherComponent },
    { path: 'emp', component: EmpComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: OtherComponent }
];
@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
    declarations: [AppComponent, EmpComponent, EmpDetailsComponent, EmpNameTransform, EmployeCountComponent, OtherComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
