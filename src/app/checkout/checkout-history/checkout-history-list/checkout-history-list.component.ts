import {Component, Input} from '@angular/core';
import {Order, OrderItem} from '../../order';

@Component({
    selector: 'app-checkout-history-list',
    templateUrl: './checkout-history-list.component.html',
})
export class CheckoutHistoryListComponent {

    @Input() orders: Order[];

    mapProducts(items: OrderItem[]) {
        return items.map(item => item.name + ' ' + item.amount).join('<br />');
    }
}
