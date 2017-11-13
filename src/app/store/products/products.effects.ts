import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {LoadProductsAction} from './load-products.action';
import {ProductService} from '../../products/product.service';
import {LoadProductsSuccessAction} from './load-products-success.action';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/withLatestFrom';

@Injectable()
export class ProductsEffects {

  @Effect() loadProducts$ = this.action$
    .ofType(LoadProductsAction.type)
    .withLatestFrom(this.store$)
    .switchMap((action: LoadProductsAction) =>
      this.productService.getProducts(action.query, action.pagination)
        .switchMap((result) => Observable.of(new LoadProductsSuccessAction(result)))
  );


  constructor(private action$: Actions, private productService: ProductService) {
  }
}
