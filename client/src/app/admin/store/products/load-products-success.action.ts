import {Action} from '@ngrx/store';
import {type} from '../../../store/type';
import {AdminProductsState} from './products.store';
import {Product} from '../../../products/product';

export class LoadProductsSuccessAction implements Action {

  static type = type('products.admin.LOAD_PRODUCTS_SUCCESS');
  type = LoadProductsSuccessAction.type;

  static reduce(state: AdminProductsState, action: LoadProductsSuccessAction) {
    return {...state, items: action.products};
  }

  constructor(public products: Product[]) {
  }

}
