import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {LoadProductsAction} from './load-products.action';
import {ProductService} from '../../products/product.service';
import {LoadProductsSuccessAction} from './load-products-success.action';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/withLatestFrom';
import {AppState} from '../app.store';
import {Store} from '@ngrx/store';
import {ChangePageAction} from './change-page.action';
import {FilterCategoryAction} from './filter-category.action';
import {ChangeTermAction} from './change-term.action';
import {ChangePriceAction} from './change-price.action';

@Injectable()
export class ProductsEffects {

  @Effect() loadProducts$ = this.action$
    .ofType(LoadProductsAction.type)
    .withLatestFrom(this.store$)
    .switchMap(([action, state]) =>
      this.productService.getProducts(state.products.query, state.products.pagination)
        .switchMap((result) => Observable.of(new LoadProductsSuccessAction(result.items, result.total)))
  );

  @Effect() changePage$ = this.action$
    .ofType(ChangePageAction.type)
    .switchMap(state => Observable.of(new LoadProductsAction()));

  @Effect() changeTerm$   = this.action$
    .ofType(ChangeTermAction.type)
    .switchMap(state => Observable.of(new ChangePageAction(1)));

  @Effect() changePrice$   = this.action$
    .ofType(ChangePriceAction.type)
    .switchMap(state => Observable.of(new ChangePageAction(1)));

  @Effect() filterCategory$ = this.action$
    .ofType(FilterCategoryAction.type)
    .switchMap(state => Observable.of(new ChangePageAction(1)));

  constructor(private action$: Actions,
              private productService: ProductService,
              private store$: Store<AppState>) {
  }
}
