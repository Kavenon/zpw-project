import { Component, OnInit } from '@angular/core';
import {Price} from '../../products/price';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.scss']
})
export class CartWidgetComponent implements OnInit {

  totalCount: number;
  totalValue: Price;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cartChanged.subscribe(() => {
      this.totalValue = this.cartService.getTotalPrice();
      this.totalCount = this.cartService.getTotalCount();
    });
  }
}
