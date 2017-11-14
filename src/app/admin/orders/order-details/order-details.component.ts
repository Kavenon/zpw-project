import {Component, Input} from '@angular/core';
import * as firebase from 'firebase';
import {Order} from '../../../checkout/order';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {

  @Input() order: Order;

}
