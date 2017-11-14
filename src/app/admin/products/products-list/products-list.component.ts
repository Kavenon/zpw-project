import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Product} from '../../../products/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  @Input() products: Product[];

  onEditProduct = new EventEmitter<Product>();
  onDeleteProduct = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit() {
  }

  editProduct(product: Product) {
    this.onEditProduct.emit(product);
  }

  deleteProduct(product: Product) {
    this.onDeleteProduct.emit(product);
  }

}
