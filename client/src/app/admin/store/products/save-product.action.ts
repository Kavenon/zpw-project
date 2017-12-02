import {Action} from '@ngrx/store';
import {AdminProductsState} from './products.store';
import {type} from '../../../store/type';
import {Product} from '../../../products/product';

export class SaveProductAction implements Action {

  static type = type('products.admin.SAVE_PRODUCT');
  type = SaveProductAction.type;

  static reduce(state: AdminProductsState, action: SaveProductAction) {
    return {...state};
  }

  constructor(public product: Product) {
  }

}
