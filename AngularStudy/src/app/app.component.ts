import { Component } from "@angular/core"

@Component({
    selector: "my-app",
    template: `<div>
    <h1>{{pageHeader}}</h1>
    </div>
<my-emp></my-emp>
<br/>
<button style='color:red' [style.fontWeight]="isbold ? 'bold' : 'normal'">Submit</button>
`
}) 

    export class AppComponent {
    pageHeader: string = "Employee Details";
    isbold: boolean = true;
}