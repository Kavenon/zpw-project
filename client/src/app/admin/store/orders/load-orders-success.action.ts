import {Action} from '@ngrx/store';
import {OrdersState} from './orders.store';
import {Order} from '../../../checkout/order';
import {type} from '../../../store/type';

export class LoadOrdersSuccessAction implements Action {

  static type = type('admin.orders.LOAD_PRODUCTS_SUCCESS');
  type = LoadOrdersSuccessAction.type;

  static reduce(state: OrdersState, action: LoadOrdersSuccessAction) {
    return {...state, items: action.items};
  }

  constructor(public items: Order[]) {
  }

}
