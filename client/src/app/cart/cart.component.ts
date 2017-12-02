import {Component, OnInit} from '@angular/core';
import {CartItem} from './cart-item';
import {Price} from '../products/price';
import {AppState} from '../store/app.store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {DeleteItemAction} from '../store/cart/delete-item.action';
import {Product} from '../products/product';
import {AddItemAction} from '../store/cart/add-item.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {

  items: Observable<CartItem[]>;
  totalValue: Observable<Price>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.items = this.store.select(state => state.cart.items);
    this.totalValue = this.store.select(state => state.cart.totalValue);
  }

  onDeleteItem(product: Product) {
    this.store.dispatch(new DeleteItemAction(product));
  }

  onAddItem(product: Product) {
    this.store.dispatch(new AddItemAction(product, 1));
  }
}
