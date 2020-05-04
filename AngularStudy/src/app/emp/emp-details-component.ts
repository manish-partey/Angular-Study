import { Component } from '@angular/core';
import { templateJitUrl, templateSourceUrl } from '@angular/compiler';
import { IEmployee } from "./employee";
import { EmployeeService } from "./employee-service"
@Component({
    selector: "emp-Details",
    templateUrl: "app/emp/emp-details-component.html",
    providers: [EmployeeService]
    })
export class EmpDetailsComponent {
    employee: IEmployee[];

    selectedEmployeeRadioButton: string = 'All';

    constructor(private _employeeService: EmployeeService) {
       this.employee = this._employeeService.getEmployee();
    }

    getEmployees(): void {
        this.employee = [
            { empCode: 'Emp101',empName: 'Manish', empGender: 'Male', empASal: 5555, empDOB: '04/11/1982' },
            { empCode: 'Emp102', empName: 'Manish123', empGender: 'Female', empASal: 6587, empDOB: '04/11/1982' },
            { empCode: 'Emp103', empName: 'Manish456', empGender: 'Male', empASal: 354, empDOB: '04/11/1982' },
            { empCode: 'Emp104', empName: 'Manish678', empGender: 'Female', empASal: 35654, empDOB: '04/11/1982' },
            { empCode: 'Emp105', empName: 'Manish890', empGender: 'Male', empASal: 6546, empDOB: '04/11/1982' },
            { empCode: 'Emp106', empName: 'Manish290', empGender: 'Femal', empASal: 9825, empDOB: '04/11/1982' },
        ];
    }

    getEmployeeTrack(index: number, employee: any): string {
        return employee.empCode;
    }

    getTotalEmpCount(): number {
        return this.employee.length;
    }

    getTotalMaleEmpCount(): number {
        return this.employee.filter(e => e.empGender === "Male").length;
    }

    getTotalFemalEmpCount(): number {
        return this.employee.filter(e => e.empGender === "Female").length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue:string): void {
        this.selectedEmployeeRadioButton = selectedRadioButtonValue;
    }

}