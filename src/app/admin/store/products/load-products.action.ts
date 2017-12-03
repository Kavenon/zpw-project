import {Action} from '@ngrx/store';
import {AdminProductsState} from './products.store';
import {type} from '../../../store/type';

export class LoadProductsAction implements Action {

    static type = type('products.admin.LOAD_PRODUCTS');
    type = LoadProductsAction.type;

    static reduce(state: AdminProductsState, action: LoadProductsAction) {
        return state;
    }

    constructor() {
    }

}
