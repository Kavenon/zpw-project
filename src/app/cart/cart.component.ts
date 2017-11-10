import { Component, OnInit } from '@angular/core';
import {CartItem} from './cart-item';
import {CartService} from './cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: Map<number, CartItem> = new Map();

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.cartService.cartChanged.subscribe((items) => {
      this.items = items;
    });
  }

  toArray(items: Map<number, CartItem>): number[] {

    if(items.size === 0){
      return [];
    }

    return Array.from(items.keys());
  }

  deleteItem(key){
    this.cartService.deleteProduct(key);
  }
}
