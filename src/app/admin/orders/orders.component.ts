import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.store';
import {Order} from '../../checkout/order';
import {Observable} from 'rxjs/Observable';
import {LoadOrdersAction} from '../store/orders/load-orders.action';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders$: Observable<Order[]>;
  activeOrder: Order;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadOrdersAction());
    this.orders$ = this.store.select(state => state.orders.items);
  }

  onOrderClick(order: Order) {
    if (this.activeOrder === order) {
      this.activeOrder = null;
      return;
    }
    this.activeOrder = order;
  }

}
