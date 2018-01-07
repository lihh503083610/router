import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   private id: number;
   private productName: string;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => this.id = params['id']);
    this.routeInfo.data.subscribe((data: {product: Product}) => {
      this.productName = data.product.name;
      this.id = data.product.id;
    });
  }

}
export class Product {
  constructor(public id: number, public name: string) {

  }
}
