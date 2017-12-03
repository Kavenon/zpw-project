import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from './auth/auth.service';
import {SocketService} from './core/socket.service';
import {NgSpinningPreloader} from 'ng2-spinning-preloader/src/ng-spinning-preloader.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    constructor(private authService: AuthService, private socketService: SocketService, private ngSpinningPreloader: NgSpinningPreloader) {
        this.socketService.init();
    }

    ngOnInit(): void {
        setTimeout(_ => {
            this.ngSpinningPreloader.stop();
        }, 1000);

        firebase.initializeApp({
            apiKey: 'AIzaSyDGHByfVSel-XJT4_j6cf5wMUVJrWpOOR8',
            authDomain: 'zpw-project.firebaseapp.com'
        });

        firebase.auth().onAuthStateChanged((user) => {
            this.authService.onAuthChanged(user);
        });


    }
}
