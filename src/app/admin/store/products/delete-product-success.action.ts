import {Action} from '@ngrx/store';
import {AdminProductsState} from './products.store';
import {type} from '../../../store/type';

export class DeleteProductSuccessActionAction implements Action {

  static type = type('products.admin.DELETE_PRODUCT_SUCCESS');
  type = DeleteProductSuccessActionAction.type;

  static reduce(state: AdminProductsState, action: DeleteProductSuccessActionAction) {
    return {...state, items: state.items.filter((item) => item.id !== action.productId)};
  }

  constructor(public productId: number) {
  }

}
