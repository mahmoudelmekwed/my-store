import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList :Product[] = [];

  constructor() { }

  addToCart(product:Product){
    let cartProduct = this.cartList.find(
      (item) => item.id == product.id
    );
    if (cartProduct?.amount && product.amount){
      cartProduct.amount += product.id
    }else{
      this.cartList.push(product)
    }
  }

  getcartlist(): Product[]{
    return this.cartList;
  }

  clearCart(): Product[] {
    this.cartList = [];
    return this.cartList;
  }

  removeProduct(index: number){
    this.cartList.splice(index, 1);
  }


}