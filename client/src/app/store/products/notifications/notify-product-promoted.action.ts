import {Action} from '@ngrx/store';
import {type} from '../../../store/type';
import {ProductsState} from '../products.store';
import {Product} from '../../../products/product';
import {reduceProduct} from './action.helper';

export class NotifyProductPromotedAction implements Action {

  static type = type('product.NOTIFY_PROMOTED');
  type = NotifyProductPromotedAction.type;

  static reduce(state: ProductsState, action: NotifyProductPromotedAction) {
    return reduceProduct(state, action.product);
  }

  constructor(public product: Product) {
  }

}
