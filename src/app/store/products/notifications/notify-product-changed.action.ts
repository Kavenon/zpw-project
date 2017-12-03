import {Action} from '@ngrx/store';
import {type} from '../../../store/type';
import {ProductsState} from '../products.store';
import {Product} from '../../../products/product';
import {reduceProduct} from './action.helper';

export class NotifyProductChangedAction implements Action {

    static type = type('product.NOTIFY_CHANGED');
    type = NotifyProductChangedAction.type;

    static reduce(state: ProductsState, action: NotifyProductChangedAction) {
        return reduceProduct(state, action.product);
    }

    constructor(public product: Product) {
    }

}
