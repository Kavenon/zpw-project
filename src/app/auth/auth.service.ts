import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {AppState} from '../store/app.store';
import {Store} from '@ngrx/store';
import {LoginAction} from '../store/user/login.action';
import {LoginFailAction} from '../store/user/login-fail.action';
import {LoginSuccessAction} from '../store/user/login-success.action';
import 'rxjs/add/operator/take';
import {LogoutSuccessAction} from '../store/user/logout-success.action';

@Injectable()
export class AuthService {

  constructor(private store: Store<AppState>) {
  }

  onAuthChanged(user) {
    if (user) {
      this.store.dispatch(new LoginSuccessAction(user));
    } else {
      this.store.dispatch(new LogoutSuccessAction());
    }
  }

  register(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    this.store.dispatch(new LoginAction());
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => this.store.dispatch(new LoginSuccessAction(user)))
      .catch(() => this.store.dispatch(new LoginFailAction()));
  }

  isAuth() {
    return this.store.select(state => state.user.authorized);
  }

  isAdmin() {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      return currentUser.email.indexOf('admin') > -1;
    }
    return false;
  }

  getToken() {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      return currentUser.getIdToken();
    }
    return Promise.resolve(null);
  }

}
