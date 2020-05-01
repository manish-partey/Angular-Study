import { Component } from "@angular/core";

@Component({
    selector: "my-emp",
    templateUrl:"app/emp/emp-component.html"
})

export class EmpComponent {
    firstName: string = "Manish";
    lastName: string = "Partey";
    address: string = "Belapur";
    city: string = "Mumbai";
    showDetails: boolean = false;

    toggleValue(): void {
        this.showDetails = !this.showDetails;
    }
}