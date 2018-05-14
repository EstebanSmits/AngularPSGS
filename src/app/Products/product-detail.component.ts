import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import {IProduct} from './iproduct';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private _productService: ProductService;
    private product: IProduct;
  constructor(private _route:ActivatedRoute) { 
    console.log(this._route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    let id= +this._route.snapshot.paramMap.get('id');
    this._productService.getProduct(id)
     .subscribe();
  
  }

}
