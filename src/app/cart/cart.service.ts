import {Injectable} from '@angular/core';
import {CheckoutForm} from '../checkout/checkout-form';
import {AppState} from '../store/app.store';
import {Store} from '@ngrx/store';
import {SaveOrderAction} from '../admin/store/orders/save-order.action';

@Injectable()
export class CartService {

  constructor(private store: Store<AppState>) {
  }

  createOrder(checkoutForm: CheckoutForm) {
    this.store.select(state => state.cart).take(1).subscribe(
      state => {
        const order = this.buildOrder(checkoutForm, state);
        this.store.dispatch(new SaveOrderAction(order));
      }
    );
  }

  private buildOrder(checkoutForm: CheckoutForm, state) {
    return {
      _id: new Date().getTime(),
      name: checkoutForm.name,
      street: checkoutForm.street,
      totalValue: state.totalValue,
      items: state.items.map(item => {
        return {
          name: item.product.name,
          price: item.product.price,
          amount: item.amount
        };
      })
    };
  }
}


