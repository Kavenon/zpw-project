import {Action} from '@ngrx/store';
import {type} from '../../../store/type';
import {ProductsState} from '../products.store';
import {Product} from '../../../products/product';

export class NotifyProductCreatedAction implements Action {

  static type = type('product.NOTIFY_CREATED');
  type = NotifyProductCreatedAction.type;

  static reduce(state: ProductsState, action: NotifyProductCreatedAction) {
    return state;
  }

  constructor(public product: Product) {
  }

}
