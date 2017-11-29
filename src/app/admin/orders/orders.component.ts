import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.store';
import {Order} from '../../checkout/order';
import {LoadOrdersAction} from '../store/orders/load-orders.action';
import {Subscription} from 'rxjs/Subscription';
import {DoneOrderAction} from '../store/orders/done-order.action';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit, OnDestroy {

  activeOrder: Order;
  pendingOrders: Order[] = [];
  doneOrders: Order[] = [];
  subscription: Subscription;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadOrdersAction());
    this.subscription = this.store.select(state => state.orders.items)
      .subscribe(orders => this.splitOrders(orders));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onOrderClick(order: Order) {
    if (this.activeOrder === order) {
      this.activeOrder = null;
      return;
    }
    this.activeOrder = order;
  }

  onDoneClick(order: Order) {
    this.store.dispatch(new DoneOrderAction(order));
  }

  private splitOrders(orders) {
    this.pendingOrders = [];
    this.doneOrders = [];

    orders.forEach(order => {
      if (order.status === 'PENDING') {
        this.pendingOrders.push(order);
      } else {
        this.doneOrders.push(order);
      }
    });
  }

}
