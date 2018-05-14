import { Injectable } from "@angular/core";
import { IProduct } from "./iproduct";
import { HttpClient } from '@angular/common/http';
import {Observable} from  'rxjs/Observable';
//import 'rxjs/add/operator/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from "@angular/common/http/src/response";

@Injectable()

export class ProductService
{

    private _productUrl: string = './api/products/products.json';
    constructor(private _http: HttpClient) {
        
    }
    getProducts():Observable<IProduct[]>
    {
        return this._http.get<IProduct[]>(this._productUrl)
        .do( data => console.log("All:" + JSON.stringify(data)))
        .catch(this.handleError);
    }
    getProduct(id:number):Observable<IProduct[]>
    {
        var data = this._http.get<IProduct[]>(this._productUrl)
        .catch(this.handleError);
        console.log("All:" + JSON.stringify(data));
        return data;
    }
    handleError(err:HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}