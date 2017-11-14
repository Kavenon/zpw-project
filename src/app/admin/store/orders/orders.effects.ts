import {Actions, Effect} from '@ngrx/effects';
import {OrderService} from '../../orders/order.service';
import {LoadOrdersAction} from './load-orders.action';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LoadOrdersSuccessAction} from './load-orders-success.action';
import {Router} from '@angular/router';

@Injectable()
export class OrdersEffects {

  @Effect() loadOrder$ = this.action$
    .ofType(LoadOrdersAction.type)
    .switchMap((action) =>
      this.orderService.getAll()
        .switchMap((result) => Observable.of(new LoadOrdersSuccessAction(result)))
    );

  constructor(private action$: Actions,
              private orderService: OrderService,
              private router: Router) {
  }
}
