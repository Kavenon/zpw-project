import {Action} from '@ngrx/store';
import {type} from '../../../store/type';
import {ProductsState} from '../products.store';
import {Product} from '../../../products/product';
import {reduceProduct} from './action.helper';

export class NotifyProductAfterOrderAction implements Action {

    static type = type('product.NOTIFY_AFTER_ORDER');
    type = NotifyProductAfterOrderAction.type;

    static reduce(state: ProductsState, action: NotifyProductAfterOrderAction) {
        return reduceProduct(state, action.product);
    }

    constructor(public product: Product) {
    }

}
