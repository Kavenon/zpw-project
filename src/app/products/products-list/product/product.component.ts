import {Component, Input, OnInit} from '@angular/core';
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

  constructor(private cartService: CartService) {
  }

  addToCard() {
    this.cartService.addProduct(this.product);
  }

}
