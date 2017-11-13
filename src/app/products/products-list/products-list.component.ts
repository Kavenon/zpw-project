import {Component, OnInit} from '@angular/core';
import {Category} from '../category';
import {Product} from '../product';
import {Observable} from 'rxjs/Observable';
import {Pagination} from './pagination';
import {AppState} from '../../store/app.store';
import {Store} from '@ngrx/store';
import {LoadProductsAction} from '../../store/products/load-products.action';
import {LoadCategoriesAction} from '../../store/categories/load-categories.action';
import {ChangePageAction} from '../../store/products/change-page.action';
import {FilterCategoryAction} from '../../store/products/filter-category.action';
import {ChangeTermAction} from '../../store/products/change-term.action';
import {AddItemAction} from '../../store/cart/add-item.action';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  categories: Observable<Category[]>;
  products: Observable<Product[]>;

  activeCategories: Observable<number[]>;
  pagination: Observable<Pagination>;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {

    this.store.dispatch(new LoadCategoriesAction());
    this.store.dispatch(new LoadProductsAction());

    this.products = this.store.select(state => state.products.items);
    this.categories = this.store.select(state => state.categories.items);
    this.pagination = this.store.select(state => state.products.pagination);
    this.activeCategories = this.store.select(state => state.products.query.categories);

  }

  onCategoryClick(category) {
    this.store.dispatch(new FilterCategoryAction(category.id));
  }

  onDeselectAll() {
    this.store.dispatch(new FilterCategoryAction(null));
  }

  onPageChange(selectedPage: number) {
    this.store.dispatch(new ChangePageAction(selectedPage));
  }

  onTermChanged(term: string) {
    this.store.dispatch(new ChangeTermAction(term));
  }

  addToCart(product: Product) {
    this.store.dispatch(new AddItemAction(product, 1));
  }
}
