import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products :Product[] = [] ;

  constructor(
    private productservice : ProductService,
    private cartservice : CartService
    ) { }

  ngOnInit(): void {
    this.productservice.getProducts().subscribe(res => {
      for (let num = 0; num < res.length; num++) {
      const product = res[num];
      product['amount'] = 1;
    }
      this.products = res;
      this.productservice.setProducts(res);
    })
  }

  addToCart(product: Product) {
    this.cartservice.addToCart(product);
  }

}
