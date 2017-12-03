import {Action} from '@ngrx/store';
import {type} from '../../../store/type';
import {OrdersState} from './orders.store';
import {Order} from '../../../checkout/order';

export class DoneOrderSuccessAction implements Action {

    static type = type('admin.orders.DONE_SUCCESS');
    type = DoneOrderSuccessAction.type;

    static reduce(state: OrdersState, action: DoneOrderSuccessAction) {
        const index = state.items.map(item => item._id).indexOf(action.order._id);
        if (index === -1) {
            console.error('Could not find product to edit');
            return state;
        }
        return DoneOrderSuccessAction.editOrder(state, index, action);
    }

    private static editOrder(state: OrdersState, index: number, action: DoneOrderSuccessAction) {
        return {
            ...state,
            items: [
                ...state.items.slice(0, index),
                {...action.order, status: 'DONE'},
                ...state.items.slice(index + 1),
            ]
        };
    }

    constructor(public order: Order) {
    }

}
