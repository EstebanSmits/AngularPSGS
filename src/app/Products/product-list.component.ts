import { Component } from '@angular/core';
import {IProduct} from './iproduct';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ProductService } from './product.service';
@Component ({
styleUrls:['./product-list.component.css'],
selector: 'pm-products',
templateUrl: './product-list.component.html'
})


export class ProductListComponent  implements OnInit{

    private _listFilter : string;
    public get listFilter() : string {
        return this._listFilter;
    }
    public set listFilter(value : string) {
        this._listFilter =value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    
    pageTitle: string = "Product List- ah yeay!";
    errorMsg : string = "";
    imageWidth: number =50;
    imageMargin: number  =2;
    filteredProducts: IProduct[];
    showImage: Boolean = false;
    private products: IProduct[];

    constructor( private _productService: ProductService) {

        
//        this.listFilter = 'cart';

    }
    toggleImage():void{
        this.showImage =!this.showImage;
    }
    ngOnInit(): void {
        console.log("Initialized.");
        this._productService.getProducts().subscribe(
            products => {this.products  = products,
                this.filteredProducts = this.products
            },
            error => this.errorMsg = <any>error);
        
    }
    performFilter(value:string): IProduct[]{
        var filterBy  =  value.toLowerCase();
//        return null;
        var myList = this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
        return myList;
    }
    onRatingClicked(message:string):void{
        this.pageTitle = 'Product List :'+ message;
    }
}