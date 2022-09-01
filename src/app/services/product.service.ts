import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //TODO fetch products from API
  products: Product[] = [
    new Product(1, 'Hoover Vacuum', 'Hoover Vacuum is amazing. The product works really well!', 100, 'data:image/jpeg;base64,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'),
    new Product(2, 'Mr. Roomba', 'Mr. Roomba is amazing and great. The product works really well!', 250, 'data:image/jpeg;base64,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'),
    new Product(3, 'Vacsun', 'Vacsun will suck up any dirt despirt the grim. It will even stop germs. The product works really well!', 300, 'data:image/jpeg;base64,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'),
    new Product(4, 'Roompa Lompa', 'Roompa Lompa loves sweet candy. The product works really well!', 99, 'data:image/jpeg;base64,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'),
    new Product(5, 'Brass Monkey', 'Brass Monkey that funky monkey is here from beastie boys. The product works really well!', 155, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQabh3iY4WRBwPcV8eaBIC_xBLzr2boaO_R1g&usqp=CAU'),
    new Product(6, 'Dustbin', 'Dustbin the dirt on the ground anywhere. The product works really well!', 111, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZccaT2mPxfaD942YVYjHO7dnZqwZnkoeFAxXCDxYhFHXVOYyOF_zaGnxlpO7an9cAKls&usqp=CAU'),
    new Product(7, 'Dirty Hairy', 'Dirty Hairy will pick up any dog hair. The product works really well!', 100, 'https://m.media-amazon.com/images/I/510vUxv46FS._AC_SX466_.jpg'),
  ]

  constructor() { }

  getProducts(): Product[] {
    return this.products
  }
}
