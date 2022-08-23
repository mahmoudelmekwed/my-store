import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem : Product;
  @Output() product = new EventEmitter()
  productCount = [1 , 2 , 3 , 4 , 5];
  selected : number = 1 ;

  constructor() {
      this.productItem ={
        id: 1,
        name: '',
        price: 0,
        url: '',
        description: '',
      }
   }

  ngOnInit(): void {
  }

  add() {
     this.product.emit( {item :this.productItem , quantity :this.selected});
  }

}
