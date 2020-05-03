"use strict";
var Employee = (function () {
    function Employee(empCode, empName, empGender, empASal, empDOB) {
        this.empCode = empCode;
        this.empName = empName;
        this.empGender = empGender;
        this.empASal = empASal;
        this.empDOB = empDOB;
    }
    Employee.prototype.computeMonthlySalary = function (empASal) {
        return empASal / 12;
    };
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map