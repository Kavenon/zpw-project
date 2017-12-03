import {Action} from '@ngrx/store';
import {type} from '../../../store/type';
import {ProductsState} from '../products.store';
import {Product} from '../../../products/product';

export class NotifyProductDeletedAction implements Action {

    static type = type('product.NOTIFY_DELETED');
    type = NotifyProductDeletedAction.type;

    static reduce(state: ProductsState, action: NotifyProductDeletedAction) {
        return {...state, items: state.items.filter((item) => item._id !== action.product._id)};
    }

    constructor(public product: Product) {
    }

}
