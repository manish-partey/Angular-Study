import { Component } from "@angular/core"

@Component({
    selector: "my-app",    
    template: `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
    
</head>
<body>
    <div class="container">
        <div class="row"><h1>{{pageHeader}}</h1></div>
        <div class="row">
            <my-emp></my-emp>
        </div>
<div class="row" style="padding:5px;">
<ul class="nav nav-tabs">
<li routerLinkActive="active"><a routerLink="home">Home</a></li>
<li routerLinkActive="active"><a routerLink="emp">Employee</a></li>
</ul>
<router-outlet></router-outlet>
</div>

        <div class="row"><button style='color:red' [style.fontWeight]="isbold ? 'bold' : 'normal'">Submit</button></div>
        <div class="row"><button style='color:red' [style.font-size.px]="fontSize">Submit</button></div>
        <div class="row"><button style='color:red' [ngStyle]="applyStyle()">Submit</button></div>
        <div class="row"><button style='color:blue' (click)="onClick()">Click</button></div>
        <div class="row"><button style='color:blue' on-click="onClick()">Alternate Click</button></div>
        <div class="row">Name : <input [value]='name' (input)='name=$event.target.value'></div>
        <div class="row">You Entered : {{name}}</div>
        <div class="row"><h2>Using Forms Module</h2><input [(ngModel)]='name' /></div>
        <div class="row">You Entered : {{name}}</div>
        <div class="row"><emp-Details></emp-Details></div>
    </div>
</body>
</html>
`
    
})

    export class AppComponent {
    pageHeader: string = "Employee Details";
    isbold: boolean = true;
    fontSize: number = 30;
    isItalic: boolean = true;
    name: string = "Manish";
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