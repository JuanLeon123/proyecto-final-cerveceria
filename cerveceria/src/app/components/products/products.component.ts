import { Component, OnInit } from '@angular/core';
import { Options } from "@angular-slider/ngx-slider";
@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    value: number = 40;
    highValue: number = 60;
    options: Options = {
        floor: 0,
        ceil: 100
    };

    constructor() { }

    ngOnInit(): void {

    }
    pepe() {
        console.log("juan es peye")
    }

}
