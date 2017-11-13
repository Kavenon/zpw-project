import {Component, OnDestroy, OnInit} from '@angular/core';
import {Category} from '../category';
import {CategoryService} from '../category.service';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ProductFilterQuery} from './product-filter-query';
import {Observable, Subscribable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {Pagination} from './pagination';
import {CartService} from '../../cart/cart.service';
import {AppState} from '../../store/app.store';
import {Store} from '@ngrx/store';
import {LoadProductsAction} from '../../store/products/load-products.action';
import {LoadCategoriesAction} from '../../store/categories/load-categories.action';
import {ChangePageAction} from '../../store/products/change-page.action';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  categories: Observable<Category[]>;
  products: Observable<Product[]>;

  activeCategories: number[] = [];
  filterQuery: BehaviorSubject<ProductFilterQuery>;
  filterQuerySub: Subscription;
  pagination: Observable<Pagination>;

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private cartService: CartService,
              private store: Store<AppState>,
  ) {

  }


  ngOnInit() {

    this.store.dispatch(new LoadCategoriesAction());
    this.store.dispatch(new LoadProductsAction());

    this.products = this.store.select(state => state.products.items);
    this.categories = this.store.select( state => state.categories.items);
    this.pagination = this.store.select( state => state.products.pagination);



    // this.filterQuery = new BehaviorSubject<ProductFilterQuery>({
    //   term: null,
    //   categories: [],
    // });
    // this.pagination = {
    //   page: 1,
    //   perPage: 1,
    //   total: 0
    // };
    //
    // this.categories = this.categoryService.getCategories();
    //
    // this.filterQuerySub = this.filterQuery.subscribe(filter => {
    //   // Todo: move to @ng/rx
    //   this.pagination.page = 1;
    //   this.products = this.productService.getProducts(filter, this.pagination);
    //   this.productService.getTotal(filter)
    //     .then(total => this.pagination.total = total);
    //   this.activeCategories = filter.categories;
    // });

  }

  ngOnDestroy() {
    // this.filterQuerySub.unsubscribe();
  }

  onCategoryClick(category) {

    // const activeCategoriesVal = this.activeCategories || [];
    // let categories;
    // if (activeCategoriesVal.indexOf(category.id) > -1) {
    //   categories = activeCategoriesVal.filter((id) => id !== category.id);
    // } else {
    //   categories = [...activeCategoriesVal, category.id];
    // }
    //
    // this.filterQuery.next({...this.filterQuery.getValue(), categories: categories});

  }

  onDeselectAll() {
    // this.filterQuery.next({...this.filterQuery.getValue(), categories: []});
  }

  onPageChange(selectedPage: number) {
    this.store.dispatch(new ChangePageAction(selectedPage));
    // this.pagination.page = selectedPage;
    // this.products = this.productService.getProducts(this.filterQuery.getValue(), this.pagination);
  }

  onTermChanged(term: string) {
    // this.filterQuery.next({...this.filterQuery.getValue(), term: term});
  }

  addToCart(product: Product) {
    // this.cartService.addProduct(product);
  }
}
