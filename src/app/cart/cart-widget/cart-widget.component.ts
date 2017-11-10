import { Component, OnInit } from '@angular/core';
import {Price} from '../../products/price';
import {CartService} from '../cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.scss']
})
export class CartWidgetComponent implements OnInit {

  totalCount: number;
  totalValue: Price;
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.totalValue = this.cartService.getTotalPrice();
    this.totalCount = this.cartService.getTotalCount();
    this.cartService.cartChanged.subscribe(() => {
      this.totalValue = this.cartService.getTotalPrice();
      this.totalCount = this.cartService.getTotalCount();
    });
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
