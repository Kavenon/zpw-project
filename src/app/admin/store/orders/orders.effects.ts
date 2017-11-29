import {Actions, Effect} from '@ngrx/effects';
import {OrderService} from '../../orders/order.service';
import {LoadOrdersAction} from './load-orders.action';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LoadOrdersSuccessAction} from './load-orders-success.action';
import {Router} from '@angular/router';
import {SaveOrderAction} from './save-order.action';
import {SaveOrderSuccessAction} from './save-order-success.action';
import {DoneOrderAction} from './done-order.action';
import {DoneOrderSuccessAction} from './done-order-success.action';

@Injectable()
export class OrdersEffects {

  @Effect() loadOrder$ = this.action$
    .ofType(LoadOrdersAction.type)
    .switchMap((action) =>
      this.orderService.getAll()
        .switchMap((result) => Observable.of(new LoadOrdersSuccessAction(result)))
    );

  @Effect() saveOrder$ = this.action$
    .ofType(SaveOrderAction.type)
    .switchMap((action: SaveOrderAction) =>
      this.orderService.saveOrder(action.order)
        .switchMap((result) => {
          this.router.navigate(['/checkout-done']);
          return Observable.of(new SaveOrderSuccessAction());
        })
    );

  @Effect() doneOrder$ = this.action$
    .ofType(DoneOrderAction.type)
    .switchMap((action: DoneOrderAction) =>
      this.orderService.doneOrder(action.order)
        .switchMap((result) => {
          return Observable.of(new DoneOrderSuccessAction(action.order));
        })
    );

  constructor(private action$: Actions,
              private orderService: OrderService,
              private router: Router) {
  }
}
