import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {ProductService} from '../../products/product.service';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/withLatestFrom';
import {AppState} from '../app.store';
import {Store} from '@ngrx/store';
import {LoadCategoriesAction} from './load-categories.action';
import {CategoryService} from '../../products/category.service';
import {LoadCategoriesSuccessAction} from './load-categories-success.action';

@Injectable()
export class CategoriesEffects {

  @Effect() loadCategories = this.action$
    .ofType(LoadCategoriesAction.type)
    .withLatestFrom(this.store$)
    .switchMap(([action, state]) =>
      this.categoryService.getCategories()
        .switchMap((result) => Observable.of(new LoadCategoriesSuccessAction(result)))
  );

  constructor(private action$: Actions,
              private categoryService: CategoryService,
              private store$: Store<AppState>) {
  }
}
