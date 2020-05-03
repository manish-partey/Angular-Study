﻿export interface IEmployee {
    empCode: string;
    empName: string;
    empGender: string;
    empASal: number;
    empDOB: string;

    computeMonthlySalary(empASal: number): number;
}

export class Employee implements IEmployee {

    constructor(public empCode: string,
        public empName: string,
        public empGender: string,
        public empASal: number,
        public empDOB: string) { }

    computeMonthlySalary(empASal: number): number {
        return empASal / 12;
    }

}