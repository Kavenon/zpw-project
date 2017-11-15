import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {

    firebase.initializeApp({
      apiKey: 'AIzaSyDGHByfVSel-XJT4_j6cf5wMUVJrWpOOR8',
      authDomain: 'zpw-project.firebaseapp.com'
    });

    firebase.auth().onAuthStateChanged((user) =>
      this.authService.onAuthChanged(user));

  }
}
