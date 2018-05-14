import { Component } from '@angular/core';
import { ProductService } from './Products/product.service';

@Component ({
selector:'pm-root',

template: `<div>
  <h1> {{pageTitle}}</h1>
  <pm-main-menu></pm-main-menu>
  <div> My 1st Component</div>
  </div>`,
  providers:[ProductService]
})
export class  AppComponent {
  pageTitle: string = 'Acme Product Management';
}