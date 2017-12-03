import {Action} from '@ngrx/store';
import {ProductsState} from './products.store';
import {type} from '../type';

export class ChangePriceAction implements Action {

    static type = type('products.CHANGE_PRICE');
    type = ChangePriceAction.type;

    static reduce(state: ProductsState, action: ChangePriceAction) {
        return {...state, query: {...state.query, price: [action.minPrice, action.maxPrice]}};
    }

    constructor(public minPrice: number, public maxPrice: number) {
    }

}
