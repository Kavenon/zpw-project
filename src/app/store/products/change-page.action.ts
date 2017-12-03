import {Action} from '@ngrx/store';
import {ProductsState} from './products.store';
import {type} from '../type';

export class ChangePageAction implements Action {

    static type = type('products.CHANGE_PAGE');
    type = ChangePageAction.type;

    static reduce(state: ProductsState, action: ChangePageAction) {
        return {...state, pagination: {...state.pagination, page: action.page}};
    }

    constructor(public page: number) {
    }

}
