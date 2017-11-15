import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AppState} from './store/app.store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {LoginSuccessAction} from './store/user/login-success.action';
import {LogoutAction} from './store/user/logout.action';
import {LogoutSuccessAction} from './store/user/logout-success.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  authorized: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.authorized = this.store.select(state => state.user.authorized);
  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyDGHByfVSel-XJT4_j6cf5wMUVJrWpOOR8',
      authDomain: 'zpw-project.firebaseapp.com'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.store.dispatch(new LoginSuccessAction());
      } else {
        this.store.dispatch(new LogoutSuccessAction());
      }
    });
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }
}
