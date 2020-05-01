"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EmpDetailsComponent = (function () {
    function EmpDetailsComponent() {
        this.employee = [
            { empCode: 'Emp101', empName: 'Manish', empGender: 'Male', empASal: 5555, empDOB: '04/11/1982' },
            { empCode: 'Emp102', empName: 'Manish123', empGender: 'Fe-Male', empASal: 6587, empDOB: '04/11/1982' },
            { empCode: 'Emp103', empName: 'Manish456', empGender: 'Male', empASal: 354, empDOB: '04/11/1982' },
            { empCode: 'Emp104', empName: 'Manish678', empGender: 'Fe-Male', empASal: 35654, empDOB: '04/11/1982' },
            { empCode: 'Emp105', empName: 'Manish890', empGender: 'Male', empASal: 6546, empDOB: '04/11/1982' }
        ];
    }
    return EmpDetailsComponent;
}());
EmpDetailsComponent = __decorate([
    core_1.Component({
        selector: "emp-Details",
        templateUrl: "app/emp/emp-details-component.html"
    })
], EmpDetailsComponent);
exports.EmpDetailsComponent = EmpDetailsComponent;
//# sourceMappingURL=emp-details-component.js.map