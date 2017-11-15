import {Component, OnInit} from '@angular/core';
import {AppState} from '../../../store/app.store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Product} from '../../../products/product';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../../products/category';
import {LoadCategoriesAction} from '../../../store/categories/load-categories.action';
import {SaveProductAction} from '../../store/products/save-product.action';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
})
export class ProductEditComponent implements OnInit {

  product$: Observable<Product>;
  categories$: Observable<Category[]>;
  isNewProduct: boolean;

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.store.dispatch(new LoadCategoriesAction());
    this.isNewProduct = this.activatedRoute.snapshot.params.id === 'new';
    this.product$ = this.store.select(state => state.adminProducts.editProduct);
    this.categories$ = this.store.select(state => state.categories.items);
  }

  onSubmit(product: Product) {
    this.store.dispatch(new SaveProductAction(product));
  }
}
