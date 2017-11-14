import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Order} from '../../../checkout/order';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent {

  @Input() orders: Order[];
  @Output() onOrderClick = new EventEmitter<Order>();

  constructor() {

  }

  openDetails(order: Order) {
    this.onOrderClick.emit(order);
  }
}
