import {CartItem} from '../../cart/cart-item';
import {createReducer} from '../build.reducer';
import {Price} from '../../products/price';
import {AddItemAction} from './add-item.action';
import {DeleteItemAction} from './delete-item.action';
import {ResetCartAction} from './reset-cart.action';

export interface CartState {
  items: CartItem[];
  totalCount: number;
  totalValue: Price;
}

export const initState: CartState = {
  items: [],
  totalCount: 0,
  totalValue: {
    value: 0,
    currency: 'USD'
  }
};

export const reducer = createReducer(initState,
  DeleteItemAction,
  AddItemAction,
  ResetCartAction,
);

export function CartReducer(state, action) {
  return reducer(state, action);
}
