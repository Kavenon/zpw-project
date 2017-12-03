import {Action} from '@ngrx/store';
import {ProductsState} from './products.store';
import {type} from '../type';

export class ChangeTermAction implements Action {

    static type = type('products.CHANGE_TERM');
    type = ChangeTermAction.type;

    static reduce(state: ProductsState, action: ChangeTermAction) {
        return {...state, query: {...state.query, term: action.term}};
    }

    constructor(public term: string) {
    }

}


