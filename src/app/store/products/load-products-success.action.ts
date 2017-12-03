import {Action} from '@ngrx/store';
import {ProductsState} from './products.store';
import {type} from '../type';
import {Product} from '../../products/product';

export class LoadProductsSuccessAction implements Action {

    static type = type('products.LOAD_PRODUCTS_SUCCESS');
    type = LoadProductsSuccessAction.type;

    static reduce(state: ProductsState, action: LoadProductsSuccessAction) {
        return {...state, items: action.products, pagination: {...state.pagination, total: action.total}};
    }

    constructor(public products: Product[], public total: number) {
    }

}
