import {CartItem} from '../../cart/cart-item';
import {createReducer} from '../build.reducer';
import {Price} from '../../products/price';
import {AddItemAction} from './add-item.action';
import {DeleteItemAction} from './delete-item.action';

export interface CartStore {
  items: CartItem[];
  totalCount: number;
  totalValue: Price;
}

const initState: CartStore = {
  items: [],
  totalCount: 0,
  totalValue: {
    value: 0,
    currency: 'USD'
  }
};

export const CartReducer = createReducer(initState,
  DeleteItemAction,
  AddItemAction
);
