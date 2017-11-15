import {Action} from '@ngrx/store';
import {type} from '../../../store/type';
import {OrdersState} from './orders.store';
import {Order} from '../../../checkout/order';

export class SaveOrderAction implements Action {

  static type = type('admin.orders.SAVE_ORDER');
  type = SaveOrderAction.type;

  static reduce(state: OrdersState, action: SaveOrderAction) {
    return state;
  }

  constructor(public order: Order) {
  }

}
