import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {AppState} from '../store/app.store';
import {Store} from '@ngrx/store';
import {LoginAction} from '../store/user/login.action';
import {LoginFailAction} from '../store/user/login-fail.action';
import {LoginSuccessAction} from '../store/user/login-success.action';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthService {

  constructor(private store: Store<AppState>) {
  }

  login(email: string, password: string) {
    this.store.dispatch(new LoginAction());
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => this.store.dispatch(new LoginSuccessAction()))
      .catch(() => this.store.dispatch(new LoginFailAction()));
  }

  isAuth() {
    return this.store.select(state => state.user.authorized);
  }

  getToken() {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      return currentUser.getToken();
    }
    return Promise.resolve(null);
  }

}
