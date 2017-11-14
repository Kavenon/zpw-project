import {Action} from '@ngrx/store';
import {AdminProductsState} from './products.store';
import {type} from '../../../store/type';

export class EditProductAction implements Action {

  static type = type('products.admin.EDIT_PRODUCT');
  type = EditProductAction.type;

  static reduce(state: AdminProductsState, action: EditProductAction) {
    return state;
  }

  constructor(public productId?: number) {
  }

}
