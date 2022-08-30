import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cartList : Product[] = [];
  totalPrice: number = 0;

  constructor(
    private cartservice : CartService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.cartList = this.cartservice.getcartlist();
     this.calculateTotalPrice();
  }

  calculateTotalPrice(){
    for(let i = 0 ; i < this.cartList.length ; i++){
      let amount = this.cartList[i].amount;
      if (!amount){amount = 1;}
      this.totalPrice += this.cartList[i].price* amount;
     }
     return this.totalPrice;
  }

  updateCart(cartproduct : Product){
    this.totalPrice = 0;
    this.calculateTotalPrice();
  }

  confirmation(firstName: string): void{
    this.cartservice.clearCart();
    this.router.navigateByUrl(`success/${firstName}/${this.totalPrice}`);
  }

  remove(index: number) {
    this.cartservice.removeProduct(index);
    this.totalPrice = 0 ;
    this.calculateTotalPrice();
}

}
