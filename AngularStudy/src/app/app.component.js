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
        template: "<div>\n    <h1>{{pageHeader}}</h1>\n    </div>\n<my-emp></my-emp>\n<br/>\n<button style='color:red' [style.fontWeight]=\"isbold ? 'bold' : 'normal'\">Submit</button>\n<br/><br/>\n<button style='color:red' [style.font-size.px]=\"fontSize\">Submit</button>\n<br/><br/>\n<button style='color:red' [ngStyle]=\"applyStyle()\">Submit</button>\n<br/><br/>\n<button style='color:blue' (click)=\"onClick()\">Click ME</button>\n"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map