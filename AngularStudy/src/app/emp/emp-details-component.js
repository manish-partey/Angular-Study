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
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee-service");
var EmpDetailsComponent = (function () {
    function EmpDetailsComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.selectedEmployeeRadioButton = 'All';
        this.employee = this._employeeService.getEmployee();
    }
    EmpDetailsComponent.prototype.getEmployees = function () {
        this.employee = [
            { empCode: 'Emp101', empName: 'Manish', empGender: 'Male', empASal: 5555, empDOB: '04/11/1982' },
            { empCode: 'Emp102', empName: 'Manish123', empGender: 'Female', empASal: 6587, empDOB: '04/11/1982' },
            { empCode: 'Emp103', empName: 'Manish456', empGender: 'Male', empASal: 354, empDOB: '04/11/1982' },
            { empCode: 'Emp104', empName: 'Manish678', empGender: 'Female', empASal: 35654, empDOB: '04/11/1982' },
            { empCode: 'Emp105', empName: 'Manish890', empGender: 'Male', empASal: 6546, empDOB: '04/11/1982' },
            { empCode: 'Emp106', empName: 'Manish290', empGender: 'Femal', empASal: 9825, empDOB: '04/11/1982' },
        ];
    };
    EmpDetailsComponent.prototype.getEmployeeTrack = function (index, employee) {
        return employee.empCode;
    };
    EmpDetailsComponent.prototype.getTotalEmpCount = function () {
        return this.employee.length;
    };
    EmpDetailsComponent.prototype.getTotalMaleEmpCount = function () {
        return this.employee.filter(function (e) { return e.empGender === "Male"; }).length;
    };
    EmpDetailsComponent.prototype.getTotalFemalEmpCount = function () {
        return this.employee.filter(function (e) { return e.empGender === "Female"; }).length;
    };
    EmpDetailsComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeRadioButton = selectedRadioButtonValue;
    };
    return EmpDetailsComponent;
}());
EmpDetailsComponent = __decorate([
    core_1.Component({
        selector: "emp-Details",
        templateUrl: "app/emp/emp-details-component.html",
        providers: [employee_service_1.EmployeeService]
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmpDetailsComponent);
exports.EmpDetailsComponent = EmpDetailsComponent;
//# sourceMappingURL=emp-details-component.js.map