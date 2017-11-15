import {createReducer} from '../../../store/build.reducer';
import {LoadOrdersAction} from './load-orders.action';
import {LoadOrdersSuccessAction} from './load-orders-success.action';
import {Order} from '../../../checkout/order';
import {SaveOrderAction} from './save-order.action';
import {SaveOrderSuccessAction} from './save-order-success.action';

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
  SaveOrderSuccessAction
);

export function OrdersReducer(state, action) {
  return reducer(state, action);
}
