import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {LoadProductsAction} from './load-products.action';
import {LoadProductsSuccessAction} from './load-products-success.action';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/withLatestFrom';
import {ProductService} from '../../../products/product.service';
import {DeleteProductAction} from './delete-product.action';
import {DeleteProductSuccessAction} from './delete-product-success.action';
import {EditProductAction} from './edit-product.action';
import {EditProductSuccessAction} from './edit-product-success.action';
import {Product} from '../../../products/product';
import {Router} from '@angular/router';
import {SaveProductAction} from './save-product.action';
import {SaveProductSuccessAction} from './save-product-success.action';
import {AppState} from '../../../store/app.store';
import {Store} from '@ngrx/store';

@Injectable()
export class AdminProductsEffects {

  @Effect() loadProducts$ = this.action$
    .ofType(LoadProductsAction.type)
    .switchMap((action) =>
      this.productService.getAllProducts()
        .switchMap((result) => Observable.of(new LoadProductsSuccessAction(result.items)))
    );

  @Effect() deleteProduct$ = this.action$
    .ofType(DeleteProductAction.type)
    .switchMap((action: DeleteProductAction) =>
      this.productService.deleteProduct(action.productId)
        .switchMap((result) => Observable.of(new DeleteProductSuccessAction(action.productId)))
    );

  @Effect() editProduct = this.action$
    .ofType(EditProductAction.type)
    .switchMap((action: EditProductAction) =>
      this.productService.getProductToEdit(action.productId)
        .switchMap((result: Product) => {
          this.router.navigate(['/admin/product/upsert', result.id || 'new']);
          return Observable.of(new EditProductSuccessAction(result));
        })
    );


  @Effect() saveProduct = this.action$
    .ofType(SaveProductAction.type)
    .switchMap((action: SaveProductAction) =>
      this.productService.saveProduct(action.product)
        .switchMap((result: Product) => {
          // this.router.navigate(['/admin/product']); Todo: uncomment after db migration
          return Observable.of(new SaveProductSuccessAction(result, action.product.id === null));
        })
    );

  // Todo: remove after migration to own database
  // @Effect({dispatch: false}) saveProductSuccess = this.action$
  //   .ofType(SaveProductSuccessAction.type)
  //   .withLatestFrom(this.store$)
  //   .switchMap(([action, state]) =>
  //     this.productService.saveInFirebase(state.adminProducts.items)
  //       .switchMap((result: Product) => {
  //         this.router.navigate(['/admin/product']);
  //         return Observable.of({});
  //       })
  //   );
  //
  // @Effect({dispatch: false}) deleteProductSuccess = this.action$
  //   .ofType(DeleteProductSuccessAction.type)
  //   .withLatestFrom(this.store$)
  //   .switchMap(([action, state]) =>
  //     this.productService.saveInFirebase(state.adminProducts.items)
  //       .switchMap((result: Product) => {
  //         return Observable.of({});
  //       })
  //   );

  // ========================================================


  constructor(private action$: Actions,
              private productService: ProductService,
              private router: Router,
              private store$: Store<AppState>) {
  }
}
