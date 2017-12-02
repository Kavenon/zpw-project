import {Action} from '@ngrx/store';
import {type} from '../../../store/type';
import {OrdersState} from './orders.store';

export class SaveOrderSuccessAction implements Action {

  static type = type('admin.orders.SAVE_ORDER_SUCCESS');
  type = SaveOrderSuccessAction.type;

  static reduce(state: OrdersState, action: SaveOrderSuccessAction) {
    return state;
  }

  constructor() {
  }

}
