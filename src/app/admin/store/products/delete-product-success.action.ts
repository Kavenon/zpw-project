import {Action} from '@ngrx/store';
import {AdminProductsState} from './products.store';
import {type} from '../../../store/type';

export class DeleteProductSuccessAction implements Action {

  static type = type('products.admin.DELETE_PRODUCT_SUCCESS');
  type = DeleteProductSuccessAction.type;

  static reduce(state: AdminProductsState, action: DeleteProductSuccessAction) {
    return {...state, items: state.items.filter((item) => item.id !== action.productId)};
  }

  constructor(public productId: string) {
  }

}
