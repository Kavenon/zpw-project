import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {SaveOrderSuccessAction} from '../../admin/store/orders/save-order-success.action';
import {ResetCartAction} from './reset-cart.action';
import {AddItemAction} from './add-item.action';
import {AppState} from '../app.store';
import {Store} from '@ngrx/store';
import {CartService} from '../../cart/cart.service';
import {RestoreAction} from './restore.action';
import {RestoreSuccessAction} from './restore-success.action';
import {AuthService} from '../../auth/auth.service';

@Injectable()
export class CartEffects {

    @Effect() saveOrderSuccess$ = this.action$
        .ofType(SaveOrderSuccessAction.type)
        .switchMap((action) =>
            Observable.of(new ResetCartAction()));

    @Effect() restore$ = this.action$
        .ofType(RestoreAction.type)
        .switchMap((action) => this.cartService.getCart()
            .switchMap(cart => Observable.of(new RestoreSuccessAction(cart))));

    @Effect({dispatch: false}) addItemAction$ = this.action$
        .ofType(AddItemAction.type)
        .withLatestFrom(this.store$)
        .switchMap(([action, state]) => {
          return this.authService.isAuth()
            .switchMap(isAuth => {
              if (isAuth) {
                this.cartService.saveCart(state.cart).subscribe(c => console.log(c), e => console.error(e));
              }
              return Observable.of({});
            });
        });

  constructor(private action$: Actions,
              private store$: Store<AppState>, private cartService: CartService,
              private authService: AuthService) {
    }
}
