import { Component,Input,Output,EventEmitter } from "@angular/core"

@Component({
    selector: "emp-count",
    templateUrl: "app/emp/empCount-component.html"
})

export class EmployeCountComponent {

    selectedRadioButtonValue: string = 'All';

    @Output()
    countRadioButtonSelectionChange: EventEmitter<string> = new EventEmitter<string>();
    @Input()
    all: number;

    @Input()
    male: number;

    @Input()
    female: number;

    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChange.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
    }
}