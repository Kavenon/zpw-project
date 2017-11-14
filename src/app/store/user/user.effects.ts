import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import {LogoutAction} from './logout.action';
import * as firebase from 'firebase';
import {LogoutSuccessAction} from './logout-success.action';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserEffects {

  @Effect() logout$ = this.action$
    .ofType(LogoutAction.type)
    .switchMap(state =>
      firebase.auth().signOut()
        .then(() => new LogoutSuccessAction()));

  @Effect({
    dispatch: false
  }) logoutRedirect$ = this.action$
    .ofType(LogoutSuccessAction.type)
    .switchMap(state => {
      this.router.navigate(['/login']);
      return Observable.of({});
    });

  constructor(private action$: Actions, private router: Router) {
  }
}
