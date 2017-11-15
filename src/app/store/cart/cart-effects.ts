import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {SaveOrderSuccessAction} from '../../admin/store/orders/save-order-success.action';
import {ResetCartAction} from './reset-cart.action';

@Injectable()
export class CartEffects {

  @Effect() saveOrderSuccess$ = this.action$
    .ofType(SaveOrderSuccessAction.type)
    .switchMap((action) =>
      Observable.of(new ResetCartAction()));

  constructor(private action$: Actions) {
  }
}
