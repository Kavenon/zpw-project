import {Action} from '@ngrx/store';
import {type} from '../../../store/type';
import {OrdersState} from './orders.store';

export class LoadOrdersAction implements Action {

  static type = type('admin.orders.LOAD_ORDERS');
  type = LoadOrdersAction.type;

  static reduce(state: OrdersState, action: LoadOrdersAction) {
    return state;
  }

  constructor() {
  }

}
