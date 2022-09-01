import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FormBuilder } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-shopping-cart-checkout-cart',
  templateUrl: './shopping-cart-checkout-cart.component.html',
  styleUrls: ['./shopping-cart-checkout-cart.component.css']
})
export class ShoppingCartCheckoutCartComponent implements OnInit {

  items = this.cartService.getItems();

  itemTotal = 0

  constructor(private cartService: CartService, private formBuilder: FormBuilder,
    private contact: ContactService) { }

  checkoutForm = this.formBuilder.group({
    name: '',
    email: ''
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.contact.PostMessage( { Product: this.items[0].name, Description: this.items[0].description, Price: this.items[0].price})
    .subscribe(response => {
      location.href = 'https://mailthis.to/confirm'
    }, error => {
      console.warn(error)
      console.log({error})
    });
    
   
    console.warn('Your order has been submitted', this.checkoutForm.value, this.items);
    this.checkoutForm.reset();
  }
  
}




