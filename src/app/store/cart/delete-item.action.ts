import {Action} from '@ngrx/store';
import {ProductFilterQuery} from '../../products/products-list/product-filter-query';
import {Pagination} from '../../products/products-list/pagination';
import {type} from '../type';
import {Product} from '../../products/product';
import {CartStore} from './cart.store';

export class DeleteItemAction implements Action {

  static type = type('cart.DELETE_ITEM');
  type = DeleteItemAction.type;

  static reduce(state: CartStore, action: DeleteItemAction) {

    const index = state.items
      .map(item => item.product.id)
      .indexOf(action.product.id);

    if(index === -1){
      return state;
    }

    let items;
    const productValue = state.items[index].product.price;

    if(state.items[index].amount === 1){
      items = [
        ...state.items.slice(0, index),
        ...state.items.slice(index + 1)
      ];
    }
    else {
      items = [
        ...state.items.slice(0, index),
        Object.assign({}, state.items[index], {
          amount: state.items[index].amount - 1
        }),
        ...state.items.slice(index + 1)];
    }

    return {...state, items, totalCount: state.totalCount - 1, totalValue: {
      ...state.totalValue,
      value: state.totalValue.value - productValue.value
    }};
  }

  constructor(public product: Product) { }

}
