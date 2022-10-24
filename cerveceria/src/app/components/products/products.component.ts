import { Component, OnInit } from '@angular/core';
import { Options } from "@angular-slider/ngx-slider";
import { apiService } from 'src/app/services/api.service';
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
    CartService: any;

    //public productList : any;
    
    //constructor(private api : ApiService){}

    ngOnInit(): void {
       /* this.api.getProducts()
         .subscribe(res => {
            this.productList = res;
         });*/
    }
addtocart(item : any){
    this.CartService.addtocart(item);
}
}
