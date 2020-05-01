import { Component } from "@angular/core"

@Component({
    selector: "my-app",
    template: `<div>
    <h1>{{pageHeader}}</h1>
    </div>
<my-emp></my-emp>
<br/>
<button style='color:red' [style.fontWeight]="isbold ? 'bold' : 'normal'">Submit</button>
<br/><br/>
<button style='color:red' [style.font-size.px]="fontSize">Submit</button>
<br/><br/>
<button style='color:red' [ngStyle]="applyStyle()">Submit</button>
<br/><br/>
<button style='color:blue' (click)="onClick()">Click ME</button>
`
}) 

    export class AppComponent {
    pageHeader: string = "Employee Details";
    isbold: boolean = true;
    fontSize: number = 30;
    isItalic: boolean = true;

    applyStyle() {
        let newStyle = {
            'font-size.px': this.fontSize,
            'font-style':this.isItalic ? 'italic':'normal',
            'font.fontWeight': this.isbold ? 'bold':'normal'
        };
        return newStyle;
    }

    onClick(): void {
        console.log("Button Clicked");
    }
}