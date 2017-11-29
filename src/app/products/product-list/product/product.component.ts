import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product;
  @Output() onAddToCart = new EventEmitter<Product>();
  @Output() onShowDetails = new EventEmitter<Product>();

  addToCard() {
    this.onAddToCart.emit(this.product);
  }

  showDetails() {
    this.onShowDetails.emit(this.product);
  }
}
