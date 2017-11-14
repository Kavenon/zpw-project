import {Action} from '@ngrx/store';
import {AdminProductsState} from './products.store';
import {type} from '../../../store/type';

export class DeleteProductAction implements Action {

  static type = type('products.admin.DELETE_PRODUCT');
  type = DeleteProductAction.type;

  static reduce(state: AdminProductsState, action: DeleteProductAction) {
    return state;
  }

  constructor(public productId: number) {
  }

}
