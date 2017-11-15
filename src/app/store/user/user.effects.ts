import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import {LogoutAction} from './logout.action';
import * as firebase from 'firebase';
import {LogoutSuccessAction} from './logout-success.action';
import {Router} from '@angular/router';

@Injectable()
export class UserEffects {

  @Effect() logout$ = this.action$
    .ofType(LogoutAction.type)
    .switchMap(state =>
      firebase.auth().signOut()
        .then(() => {
          this.router.navigate(['/login']);
          return new LogoutSuccessAction();
        }));

  constructor(private action$: Actions, private router: Router) {
  }
}
