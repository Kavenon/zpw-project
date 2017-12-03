import {Action} from '@ngrx/store';
import {type} from '../../../store/type';
import {OrdersState} from './orders.store';
import {Order} from '../../../checkout/order';

export class DoneOrderAction implements Action {

    static type = type('admin.orders.DONE');
    type = DoneOrderAction.type;

    static reduce(state: OrdersState, action: DoneOrderAction) {
        return state;
    }

    constructor(public order: Order) {
    }

}
