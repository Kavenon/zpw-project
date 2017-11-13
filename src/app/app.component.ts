import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AppState} from './store/app.store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  authorized: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.authorized = this.store.select(state => state.user.authorized);
  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyDGHByfVSel-XJT4_j6cf5wMUVJrWpOOR8',
      authDomain: 'zpw-project.firebaseapp.com'
    });
  }
}
