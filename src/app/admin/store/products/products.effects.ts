import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {LoadProductsAction} from './load-products.action';
import {LoadProductsSuccessAction} from './load-products-success.action';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/withLatestFrom';
import {ProductService} from '../../../products/product.service';
import {DeleteProductAction} from './delete-product.action';
import {DeleteProductSuccessActionAction} from './delete-product-success.action';

@Injectable()
export class AdminProductsEffects {

  @Effect() loadProducts$ = this.action$
    .ofType(LoadProductsAction.type)
    .switchMap((action) =>
      this.productService.getAllProducts()
        .switchMap((result) => Observable.of(new LoadProductsSuccessAction(result.items, result.items.length)))
    );

  @Effect() deleteProduct$ = this.action$
    .ofType(DeleteProductAction.type)
    .switchMap((action: DeleteProductAction) =>
      this.productService.deleteProduct(action.productId)
        .switchMap((result) => Observable.of(new DeleteProductSuccessActionAction(action.productId)))
    );

  constructor(private action$: Actions,
              private productService: ProductService) {
  }
}
