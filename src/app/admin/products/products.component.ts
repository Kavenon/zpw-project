import {Component, OnInit} from '@angular/core';
import {AppState} from '../../store/app.store';
import {Store} from '@ngrx/store';
import {Product} from '../../products/product';
import {Observable} from 'rxjs/Observable';
import {EditProductAction} from '../store/products/edit-product.action';
import {DeleteProductAction} from '../store/products/delete-product.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.products$ = this.store.select(state => state.adminProducts.items);
  }

  editProduct(product: Product) {
    this.store.dispatch(new EditProductAction(product.id));
  }

  deleteProduct(product: Product) {
    this.store.dispatch(new DeleteProductAction(product.id));
  }

  addProduct() {
    this.store.dispatch(new EditProductAction());
  }


}
