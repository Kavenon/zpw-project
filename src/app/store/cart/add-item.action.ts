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

    const items = this.getChangedItems(index, state, action);
    const newTotalValue = state.totalValue.value + (action.product.price.value * action.amount);
    const newTotalCount = state.totalCount + action.amount;

    return {
      ...state,
      items: items,
      totalCount: newTotalCount,
      totalValue: {
        ...state.totalValue,
        value: newTotalValue
      }
    };
  }

  private static getChangedItems(index: number, state: CartState, action: AddItemAction) {
    let items;
    if (index === -1) {
      items = this.appendNewItem(state, action)
    } else {
      items = this.changeItem(state, index, action);
    }
    return items;
  }

  private static changeItem(state: CartState, index: number, action: AddItemAction) {
    return [
      ...state.items.slice(0, index),
      Object.assign({}, state.items[index], {
        amount: state.items[index].amount + action.amount
      }),
      ...state.items.slice(index + 1)];
  }

  private static appendNewItem(state: CartState, action: AddItemAction) {
    return [...state.items, {product: action.product, amount: action.amount}];
  }

  constructor(public product: Product, public amount: number) { }

}
