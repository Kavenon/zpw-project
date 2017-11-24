import {Action} from '@ngrx/store';
import {AdminProductsState} from './products.store';
import {type} from '../../../store/type';
import {Product} from '../../../products/product';

export class SaveProductSuccessAction implements Action {

  static type = type('products.admin.SAVE_PRODUCT_SUCCESS');
  type = SaveProductSuccessAction.type;

  static reduce(state: AdminProductsState, action: SaveProductSuccessAction) {

    if (action.isNew) {
      return this.appendNewProduct(state, action);
    } else {
      const index = state.items.map(item => item._id).indexOf(action.product._id);
      if (index === -1) {
        console.error('Could not find product to edit');
        return state;
      }
      return this.editProduct(state, index, action);
    }

  }

  private static editProduct(state: AdminProductsState, index: number, action: SaveProductSuccessAction) {
    return {
      ...state,
      items: [
        ...state.items.slice(0, index),
        Object.assign({}, state.items[index], action.product),
        ...state.items.slice(index + 1),
      ]
    };
  }

  private static appendNewProduct(state: AdminProductsState, action: SaveProductSuccessAction) {
    return {...state, items: [...state.items, action.product]};
  }

  constructor(public product: Product, public isNew: boolean) {
  }

}
