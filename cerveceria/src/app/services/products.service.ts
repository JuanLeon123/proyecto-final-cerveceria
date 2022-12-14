import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {


    /*url = 'http://localhost:4000/api/productos';*/

    url = 'https://express-cerveceria.herokuapp.com/api/productos';



    constructor(private http: HttpClient) { }


    getProductos(): Observable<any>{
        return this.http.get(this.url);
    }

    getProductosxCategoria(categoriaBusqueda: any): Observable<any>{
        return this.http.get(`${this.url}/categoria/${categoriaBusqueda}`);
    }

}
