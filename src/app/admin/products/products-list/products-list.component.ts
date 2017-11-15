import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../products/product';

@Component({
  selector: 'app-admin-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class AdminProductsListComponent implements OnInit {

  @Input() products: Product[];

  @Output() onEditProduct = new EventEmitter<Product>();
  @Output() onDeleteProduct = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit() {
  }

  editProduct(product: Product) {
    this.onEditProduct.emit(product);
  }

  deleteProduct(product: Product) {
    if (confirm('Czy jesteś pewien?')) {
      this.onDeleteProduct.emit(product);
    }
  }

}
