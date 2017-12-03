import {Action} from '@ngrx/store';
import {type} from '../type';
import {CartState} from './cart.store';
import {merge} from 'lodash';

export class RestoreAction implements Action {

    static type = type('cart.RESTORE_CART');
    type = RestoreAction.type;

    constructor() {
    }

    static reduce(state: CartState, action: RestoreAction) {
        return state;
    }

}
