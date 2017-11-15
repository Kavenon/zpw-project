import {Action} from '@ngrx/store';
import {AdminProductsState} from './products.store';
import {type} from '../../../store/type';

export class SaveProductSuccessAction implements Action {

  static type = type('products.admin.SAVE_PRODUCT_SUCCESS');
  type = SaveProductSuccessAction.type;

  static reduce(state: AdminProductsState, action: SaveProductSuccessAction) {
    return {...state};
  }

  constructor() {
  }

}
