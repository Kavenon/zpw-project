import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import {LogoutAction} from './logout.action';
import * as firebase from 'firebase';
import {LogoutSuccessAction} from './logout-success.action';
import {Router} from '@angular/router';
import {RestoreAction} from '../cart/restore.action';
import {Observable} from 'rxjs/Observable';
import {LoginSuccessAction} from './login-success.action';

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

    @Effect() login$ = this.action$
        .ofType(LoginSuccessAction.type)
        .switchMap(state => Observable.of(new RestoreAction()));

    constructor(private action$: Actions, private router: Router) {
    }
}
