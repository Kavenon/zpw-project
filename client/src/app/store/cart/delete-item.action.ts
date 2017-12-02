import {Action} from '@ngrx/store';
import {type} from '../type';
import {Product} from '../../products/product';
import {CartState} from './cart.store';

export class DeleteItemAction implements Action {

  static type = type('cart.DELETE_ITEM');
  type = DeleteItemAction.type;

  static reduce(state: CartState, action: DeleteItemAction) {

    const index = state.items
      .map(item => item.product._id)
      .indexOf(action.product._id);

    if(index === -1){
      console.error('Not found item to remove');
      return state;
    }

    const productValue = state.items[index].product.price;
    const items = DeleteItemAction.getChangedItems(state, index);
    const newTotalCount = state.totalCount - 1;
    const newTotalValue = state.totalValue.value - productValue.value;

    return {
      ...state, items,
      totalCount: newTotalCount,
      totalValue: {
        ...state.totalValue,
        value: newTotalValue
      }
    };
  }

  private static getChangedItems(state: CartState, index: number) {
    let items;

    if (state.items[index].amount === 1) {
      items = DeleteItemAction.removeItem(items, state, index);
    } else {
      items = DeleteItemAction.decreaseItemAmount(state, index);
    }
    return items;
  }

  private static decreaseItemAmount(state: CartState, index: number) {
    return [
      ...state.items.slice(0, index),
      Object.assign({}, state.items[index], {
        amount: state.items[index].amount - 1
      }),
      ...state.items.slice(index + 1)];
  }

  private static removeItem(items, state: CartState, index: number) {
    items = [
      ...state.items.slice(0, index),
      ...state.items.slice(index + 1)
    ];
    return items;
  }

  constructor(public product: Product) { }

}
