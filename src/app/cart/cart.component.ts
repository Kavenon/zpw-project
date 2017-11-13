import { Component, OnInit } from '@angular/core';
import {CartItem} from './cart-item';
import {CartService} from './cart.service';
import {Router} from '@angular/router';
import {Price} from '../products/price';
import {AppState} from '../store/app.store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {DeleteItemAction} from '../store/cart/delete-item.action';
import {Product} from '../products/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: Observable<CartItem[]>;
  totalValue: Observable<Price>;

  constructor(private store: Store<AppState>, private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.items = this.store.select(state => state.cart.items);
    this.totalValue = this.store.select(state => state.cart.totalValue);
  }

  deleteItem(product: Product){
    this.store.dispatch(new DeleteItemAction(product));
  }
}
