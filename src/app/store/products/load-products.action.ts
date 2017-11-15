import {Action} from '@ngrx/store';
import {ProductsState} from './products.store';
import {type} from '../type';

export class LoadProductsAction implements Action {

  static type = type('products.LOAD_PRODUCTS');
  type = LoadProductsAction.type;

  static reduce(state: ProductsState, action: LoadProductsAction) {
    return state;
  }

  constructor() { }

}
