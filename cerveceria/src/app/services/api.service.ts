import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, pipe } from 'rxjs';
import { map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class apiService {

  //public cartItemList: any = [];
  //public productList = new BehaviorSubject<any>([]);


  constructor(private http : HttpClient) { }

  getProducts(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res: any)=>{
      return res;
    }))  
        
    
  }

  /*addToCart (product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();*/
  }
  /*getTotalPrice(){
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
  }
  removeAllCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
} */
