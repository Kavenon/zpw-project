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

  private _product: Product;
  @Output() onAddToCart = new EventEmitter<Product>();
  @Output() onShowDetails = new EventEmitter<Product>();
  timeLeft = 0;
  timeLeftStr = '';
  nowRefresher;

  constructor() {
  }

  ngOnInit(): void {
    this.checkPromo();
  }

  @Input()
  set product(value: Product) {
    this._product = value;
    this.checkPromo();
  }

  get product(): Product {
    return this._product;
  }

  ngOnDestroy(): void {
    if (this.nowRefresher) {
      clearInterval(this.nowRefresher);
    }
  }

  isPromo() {
    return isPromo(this._product);
  }

  getDiscountedPrice() {
    return getDiscountedPrice(this._product);
  }

  addToCard() {
    this.onAddToCart.emit(this._product);
  }

  showDetails() {
    this.onShowDetails.emit(this._product);
  }

  private checkPromo() {
    if (this.isPromo()) {
      this.clearTick();
      this.tickPromo();
      this.nowRefresher = setInterval(_ => {
        this.tickPromo();
      }, 1000);
    }
  }

  private tickPromo() {
    if (this._product.promo) {
      this.timeLeft = this._product.promo.until - new Date().getTime();
      const duration = moment.duration({milliseconds: this.timeLeft});
      this.timeLeftStr = duration.minutes() + ':' + duration.seconds();
    }
  }

  private clearTick() {
    if (this.nowRefresher) {
      clearInterval(this.nowRefresher);
    }
  }
}
