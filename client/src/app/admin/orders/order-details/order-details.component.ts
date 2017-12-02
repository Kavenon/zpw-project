import {Component, Input} from '@angular/core';
import {Order} from '../../../checkout/order';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
})
export class OrderDetailsComponent {

  @Input() order: Order;

}
