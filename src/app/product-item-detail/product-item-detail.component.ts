import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  product!: Product;
  productCount = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
  selected : any = 1 ;

  constructor(
    private route : ActivatedRoute,
    private productservice : ProductService,
    private cartservice : CartService
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productservice.getProducts().subscribe((res) => {
        this.product = res.find(
          (item) => item.id == params['id']
        ) as Product;
        if (this.product) {
          this.product.amount = 1;
        }
      });
    });
  }

  add(item: Product):void {
    item.amount = this.selected;
    this.cartservice.addToCart(item);
    alert('Added to your cart');
    this.selected = 1;
  }

}
