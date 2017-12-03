import {createReducer} from '../../../store/build.reducer';
import {LoadOrdersAction} from './load-orders.action';
import {LoadOrdersSuccessAction} from './load-orders-success.action';
import {Order} from '../../../checkout/order';
import {SaveOrderAction} from './save-order.action';
import {SaveOrderSuccessAction} from './save-order-success.action';
import {DoneOrderAction} from './done-order.action';
import {DoneOrderSuccessAction} from './done-order-success.action';

export interface OrdersState {
    items: Order[];
}

const initState: OrdersState = {
    items: [],
};
const reducer = createReducer(initState,
    LoadOrdersAction,
    LoadOrdersSuccessAction,
    SaveOrderAction,
    SaveOrderSuccessAction,
    DoneOrderAction,
    DoneOrderSuccessAction,
);

export function OrdersReducer(state, action) {
    return reducer(state, action);
}
