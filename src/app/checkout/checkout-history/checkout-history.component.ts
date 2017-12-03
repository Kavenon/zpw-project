import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../admin/orders/order.service';
import {Observable} from 'rxjs/Observable';
import {Order} from '../order';

@Component({
    selector: 'app-checkout-history',
    templateUrl: './checkout-history.component.html',
})
export class CheckoutHistoryComponent implements OnInit {

    orders: Observable<Order>;

    constructor(private orderService: OrderService) {
    }

    ngOnInit() {
        this.orders = this.orderService.getForUser();
    }

}
