import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem : Product;
  @Output() product = new EventEmitter();
  productCount = [1,2,3,4,5,6,7,8,9,10];
  selected = 1 ;

  constructor(private productservice : ProductService) {
      this.productItem ={
        id: 1,
        name: '',
        price: 0,
        url: '',
        description: '',
        amount:0
      }
   }

  ngOnInit(): void {
  }

  add(item: Product) {
    item.amount = this.selected;
    this.product.emit(item);
    alert('Added to your cart');
    this.selected = 1;
  }
}
