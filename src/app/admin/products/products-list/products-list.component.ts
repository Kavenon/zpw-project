import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../products/product';

@Component({
  selector: 'app-admin-products-list',
  templateUrl: './products-list.component.html',
})
export class AdminProductsListComponent {

  @Input() products: Product[];

  @Output() onEditProduct = new EventEmitter<Product>();
  @Output() onDeleteProduct = new EventEmitter<Product>();

  editProduct(product: Product) {
    this.onEditProduct.emit(product);
  }

  deleteProduct(product: Product) {
    if (confirm('Czy jesteś pewien?')) {
      this.onDeleteProduct.emit(product);
    }
  }

}
