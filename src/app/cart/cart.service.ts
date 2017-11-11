import {Injectable} from '@angular/core';
import {Product} from '../products/product';
import {currencyType, Price} from '../products/price';
import {Subject} from 'rxjs/Subject';
import {CartItem} from './cart-item';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CartService {

  private currency: currencyType = 'USD';

  private items: Map<number, CartItem> = new Map();

  cartChanged = new BehaviorSubject<Map<number, CartItem>>(new Map());

  constructor() {
  }

  deleteProduct(key): void {

    this.items.delete(key);
    this.cartChanged.next(this.items);

  }

  addProduct(product: Product): void {
    const productInCart = this.items.get(product.id);
    if (productInCart) {
      productInCart.amount++;
    } else {
      this.items.set(product.id, {
        amount: 1,
        product: product
      });
    }
    this.cartChanged.next(this.items);
  }

  getTotalCount() {
    let total = 0;
    this.items.forEach(item => {
      total = total + item.amount;
    });
    return total;
  }

  getTotalPrice(): Price {
    let total = 0;
    this.items.forEach(item => {
      total = total + item.amount * item.product.price.value;
    });
    return {
      value: total,
      currency: this.currency
    };
  }

}


