import { Component } from '@angular/core';
import { templateJitUrl, templateSourceUrl } from '@angular/compiler';
@Component({
    selector: "emp-Details",
    templateUrl: "app/emp/emp-details-component.html"
    })
export class EmpDetailsComponent {
    employee: any[] = [
        { empCode: 'Emp101', empName: 'Manish', empGender: 'Male', empASal: 5555, empDOB: '04/11/1982' },
        { empCode: 'Emp102', empName: 'Manish123', empGender: 'Fe-Male', empASal: 6587, empDOB: '04/11/1982' },
        { empCode: 'Emp103', empName: 'Manish456', empGender: 'Male', empASal: 354, empDOB: '04/11/1982' },
        { empCode: 'Emp104', empName: 'Manish678', empGender: 'Fe-Male', empASal: 35654, empDOB: '04/11/1982' },
        { empCode: 'Emp105', empName: 'Manish890', empGender: 'Male', empASal: 6546, empDOB: '04/11/1982' }
    ];
}