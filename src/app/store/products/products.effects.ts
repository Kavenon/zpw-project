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
import {NotifyProductCreatedAction} from './notifications/notify-product-created.action';
import {NotificationService} from '../../core/notification.service';
import {NotifyProductDeletedAction} from './notifications/notify-product-deleted.action';
import {NotifyProductPromotedAction} from './notifications/notify-product-promoted.action';
import {NotifyProductChangedAction} from './notifications/notify-product-changed.action';
import {NotifyProductAfterOrderAction} from './notifications/notify-product-change-after-order.action';

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

    @Effect() changeTerm$ = this.action$
        .ofType(ChangeTermAction.type)
        .switchMap(state => Observable.of(new ChangePageAction(1)));

    @Effect() changePrice$ = this.action$
        .ofType(ChangePriceAction.type)
        .switchMap(state => Observable.of(new ChangePageAction(1)));

    @Effect() filterCategory$ = this.action$
        .ofType(FilterCategoryAction.type)
        .switchMap(state => Observable.of(new ChangePageAction(1)));

    @Effect({dispatch: false}) productCreated$ = this.action$
        .ofType(NotifyProductCreatedAction.type)
        .switchMap((action: NotifyProductCreatedAction) => {
            this.notificationService.notifySuccess('Dodano nowy produkt!', action.product.name);
            return Observable.of({});
        });

    @Effect({dispatch: false}) productDeleted$ = this.action$
        .ofType(NotifyProductDeletedAction.type)
        .switchMap((action: NotifyProductDeletedAction) => {
            this.notificationService.notifyWarning('Usunięto produkt', action.product.name);
            return Observable.of({});
        });

    @Effect({dispatch: false}) productEdited$ = this.action$
        .ofType(NotifyProductChangedAction.type)
        .switchMap((action: NotifyProductChangedAction) => {
            this.notificationService.notifyWarning('Zmieniono produkt', action.product.name);
            return Observable.of({});
        });

    @Effect({dispatch: false}) productPromoted$ = this.action$
        .ofType(NotifyProductPromotedAction.type)
        .switchMap((action: NotifyProductPromotedAction) => {
            this.notificationService.notifyWarning('Produkt na promocji', action.product.name);
            return Observable.of({});
        });

    @Effect({dispatch: false}) productAmount$ = this.action$
        .ofType(NotifyProductAfterOrderAction.type)
        .switchMap((action: NotifyProductAfterOrderAction) => {
            this.notificationService.notifyWarning('Zmiana ilości produktu na magazynie', action.product.name);
            return Observable.of({});
        });

    constructor(private action$: Actions,
                private productService: ProductService,
                private store$: Store<AppState>, private notificationService: NotificationService) {
    }
}
