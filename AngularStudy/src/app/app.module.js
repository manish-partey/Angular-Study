"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var emp_component_1 = require("./emp/emp-component");
var emp_details_component_1 = require("./emp/emp-details-component");
var emp_component_custom_1 = require("./emp/emp-component-custom");
var empCount_component_1 = require("./emp/empCount-component");
var other_component_1 = require("./other/other-component");
var appRoutes = [
    { path: 'home', component: other_component_1.OtherComponent },
    { path: 'emp', component: emp_component_1.EmpComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: other_component_1.OtherComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, emp_component_1.EmpComponent, emp_details_component_1.EmpDetailsComponent, emp_component_custom_1.EmpNameTransform, empCount_component_1.EmployeCountComponent, other_component_1.OtherComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map