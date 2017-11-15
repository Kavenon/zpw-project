import {Component, OnInit} from '@angular/core';
import {Price} from '../../products/price';
import {Observable} from 'rxjs/Observable';
import {AppState} from '../../store/app.store';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.scss']
})
export class CartWidgetComponent implements OnInit {

  totalCount: Observable<number>;
  totalValue: Observable<Price>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.totalCount = this.store.select(state => state.cart.totalCount);
    this.totalValue = this.store.select(state => state.cart.totalValue);
  }
}
