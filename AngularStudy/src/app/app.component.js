"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.pageHeader = "Employee Details";
        this.isbold = true;
        this.fontSize = 30;
        this.isItalic = true;
        this.name = "Manish";
    }
    AppComponent.prototype.applyStyle = function () {
        var newStyle = {
            'font-size.px': this.fontSize,
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font.fontWeight': this.isbold ? 'bold' : 'normal'
        };
        return newStyle;
    };
    AppComponent.prototype.onClick = function () {
        console.log("Button Clicked");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"utf-8\" />\n    <title></title>\n    \n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"row\"><h1>{{pageHeader}}</h1></div>\n        <div class=\"row\">\n            <my-emp></my-emp>\n        </div>\n        <div class=\"row\"><button style='color:red' [style.fontWeight]=\"isbold ? 'bold' : 'normal'\">Submit</button></div>\n        <div class=\"row\"><button style='color:red' [style.font-size.px]=\"fontSize\">Submit</button></div>\n        <div class=\"row\"><button style='color:red' [ngStyle]=\"applyStyle()\">Submit</button></div>\n        <div class=\"row\"><button style='color:blue' (click)=\"onClick()\">Click</button></div>\n        <div class=\"row\"><button style='color:blue' on-click=\"onClick()\">Alternate Click</button></div>\n        <div class=\"row\">Name : <input [value]='name' (input)='name=$event.target.value'></div>\n        <div class=\"row\">You Entered : {{name}}</div>\n        <div class=\"row\"><h2>Using Forms Module</h2><input [(ngModel)]='name' /></div>\n        <div class=\"row\">You Entered : {{name}}</div>\n        <div class=\"row\"><emp-Details></emp-Details></div>\n    </div>\n</body>\n</html>\n"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map