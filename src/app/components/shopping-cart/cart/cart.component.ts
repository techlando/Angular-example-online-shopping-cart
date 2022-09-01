import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from '../../../services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = []

  items = this.cartService.getItems();

  cartTotal = 0

  constructor(private msg: MessengerService, private cartService: CartService) { 
    
  }
  
  ngOnInit() {

    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product)
      
    })
   
  }

  itemsCount(){
    return this.cartService.itemsCount();
  }
addProductToCart(product: Product) {
  let productExists = false;

  for(let i in this.cartItems) {
    if(this.cartItems[i].productId === product.id) {
    this.cartItems[i].qty++ 
      productExists = true
    break;
    }
  }

  if(!productExists) {
    this.cartItems.push({
      productId: product.id,
      productName: product.name,
      qty: 1,
      price: product.price
    })
  }  
    this.cartTotal = 0
    this.cartItems.forEach(item => {
    this.cartTotal += (item.qty * item.price)
    
    });
  }
}
