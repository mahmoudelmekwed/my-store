import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products :Product[] = [] ;
  cartList :any[] = [];

  constructor(private productservice : ProductService) { }

  ngOnInit(): void {
    this.productservice.getProducts().subscribe(res => {
      this.products = res;
    })
  }

  addToCart(event:any){
    // console.log(event)
    //let message: string='';
    if ("cart" in localStorage){
      this.cartList = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartList.find(item => item.id == event.id)
      if (exist){
        alert(`'${exist.name}' is already exist in your cart`)
      }else{
        this.cartList.push(event)
      localStorage.setItem("cart" , JSON.stringify(this.cartList) )
      }
      
    }else{
      this.cartList.push(event)
      localStorage.setItem("cart" , JSON.stringify(this.cartList) )
    }
     
  }

}
