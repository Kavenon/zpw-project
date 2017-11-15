import {Action} from '@ngrx/store';
import {type} from '../type';
import {CartState} from './cart.store';

export class ResetCartAction implements Action {

  static type = type('cart.RESET_CART');
  type = ResetCartAction.type;

  static reduce(state: CartState, action: ResetCartAction) {
    return Object.assign({}, {
      items: [],
      totalCount: 0,
      totalValue: {
        value: 0,
        currency: 'USD'
      }
    });
  }

  constructor() {
  }

}
