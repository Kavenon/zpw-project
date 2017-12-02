import {Action} from '@ngrx/store';
import {type} from '../type';
import {CartState} from './cart.store';
import {merge} from 'lodash';

export class RestoreSuccessAction implements Action {

  static type = type('cart.RESTORE_CART_SUCCESS');
  type = RestoreSuccessAction.type;

  constructor(public cartState: CartState) {
  }

  static reduce(state: CartState, action: RestoreSuccessAction) {
    if (!action.cartState || Object.keys(action.cartState).length === 0) {
      return state;
    }
    return merge({}, action.cartState);
  }
}
