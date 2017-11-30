import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Product} from '../../product';
import * as moment from 'moment';
import {getDiscountedPrice, isPromo} from '../../../shared/product.helper';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  @Input() product: Product;
  @Output() onAddToCart = new EventEmitter<Product>();
  @Output() onShowDetails = new EventEmitter<Product>();
  timeLeft = 0;
  timeLeftStr = '';
  nowRefresher;

  constructor() {
  }

  ngOnInit(): void {
    this.tickPromo();
    this.nowRefresher = setInterval(_ => {
      this.tickPromo();
    }, 1000);
  }

  private tickPromo() {
    this.timeLeft = this.product.promo.until - new Date().getTime();
    const duration = moment.duration({milliseconds: this.timeLeft});
    this.timeLeftStr = duration.minutes() + ':' + duration.seconds();
  }

  ngOnDestroy(): void {
    if (this.nowRefresher) {
      clearInterval(this.nowRefresher);
    }
  }

  isPromo() {
    return isPromo(this.product);
  }

  getDiscountedPrice() {
    return getDiscountedPrice(this.product);
  }

  addToCard() {
    this.onAddToCart.emit(this.product);
  }

  showDetails() {
    this.onShowDetails.emit(this.product);
  }
}
