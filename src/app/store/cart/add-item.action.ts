import {Action} from '@ngrx/store';
import {type} from '../type';
import {Product} from '../../products/product';
import {CartState} from './cart.store';

export class AddItemAction implements Action {

  static type = type('cart.ADD_ITEM');
  type = AddItemAction.type;

  static reduce(state: CartState, action: AddItemAction) {

    const index = state.items
      .map(item => item.product.id)
      .indexOf(action.product.id);

    let items;
    if(index === -1) {
      items = [...state.items, {product: action.product, amount: action.amount}]
    } else {
      items = [
        ...state.items.slice(0, index),
        Object.assign({}, state.items[index], {
          amount: state.items[index].amount + action.amount
        }),
        ...state.items.slice(index + 1)];
    }
    return {
      ...state,
      items: items,
      totalCount: state.totalCount + action.amount,
      totalValue: {
        ...state.totalValue,
        value: state.totalValue.value + (action.product.price.value * action.amount)
      }
    };
  }

  constructor(public product: Product, public amount: number) { }

}
