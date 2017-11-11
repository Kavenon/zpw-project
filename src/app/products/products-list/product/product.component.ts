import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../product';
import {Router} from '@angular/router';
import {CartService} from '../../../cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product;
  @Output() onAddToCart = new EventEmitter<Product>();

  addToCard() {
    this.onAddToCart.emit(this.product);
  }

}
