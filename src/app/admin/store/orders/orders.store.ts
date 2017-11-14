import {createReducer} from '../../../store/build.reducer';
import {LoadOrdersAction} from './load-orders.action';
import {LoadOrdersSuccessAction} from './load-orders-success.action';
import {Order} from '../../../checkout/order';
import {OrderDetailsAction} from './order-details.action';

export interface OrdersState {
  items: Order[];
}

const initState: OrdersState = {
  items: [],
};
const reducer = createReducer(initState,
  LoadOrdersAction,
  LoadOrdersSuccessAction,
);

export function OrdersReducer(state, action) {
  return reducer(state, action);
}
