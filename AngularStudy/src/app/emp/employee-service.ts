import { Injectable } from "@angular/core"
import { IEmployee } from "./employee";

@Injectable()
export class EmployeeService {

    getEmployee(): IEmployee []
    {
        return [
            { empCode: 'Emp101', empName: 'Manish', empGender: 'Male', empASal: 5555, empDOB: '04/11/1982' },
            { empCode: 'Emp102', empName: 'Manish123', empGender: 'Female', empASal: 6587, empDOB: '04/11/1982' },
            { empCode: 'Emp103', empName: 'Manish456', empGender: 'Male', empASal: 354, empDOB: '04/11/1982' },
            { empCode: 'Emp104', empName: 'Manish678', empGender: 'Female', empASal: 35654, empDOB: '04/11/1982' },
            { empCode: 'Emp105', empName: 'Manish890', empGender: 'Male', empASal: 6546, empDOB: '04/11/1982' },
            { empCode: 'Emp106', empName: 'Manish290', empGender: 'Femal', empASal: 9825, empDOB: '04/11/1982' }
        ];
    }

}