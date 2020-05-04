"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeCountComponent = /** @class */ (function () {
    function EmployeCountComponent() {
        this.selectedRadioButtonValue = 'All';
        this.countRadioButtonSelectionChange = new core_1.EventEmitter();
    }
    EmployeCountComponent.prototype.onRadioButtonSelectionChange = function () {
        this.countRadioButtonSelectionChange.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], EmployeCountComponent.prototype, "countRadioButtonSelectionChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], EmployeCountComponent.prototype, "all", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], EmployeCountComponent.prototype, "male", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], EmployeCountComponent.prototype, "female", void 0);
    EmployeCountComponent = __decorate([
        core_1.Component({
            selector: "emp-count",
            templateUrl: "app/emp/empCount-component.html"
        })
    ], EmployeCountComponent);
    return EmployeCountComponent;
}());
exports.EmployeCountComponent = EmployeCountComponent;
//# sourceMappingURL=empCount-component.js.map