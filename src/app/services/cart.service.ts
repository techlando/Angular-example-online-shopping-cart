import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = []

  constructor() { }
addToCart(product: Product){
  this.items.push(product)
}

getItems() {
  return this.items;
}
itemsCount() {
  return this.items.length;
}

clearCart() {
  this.items = []
  return this.items;
}

}
