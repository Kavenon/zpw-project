import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {AppState} from '../../store/app.store';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, OnDestroy {

  loading$: Observable<boolean>;
  error$: Observable<string>;
  subscription: Subscription;

  constructor(private authService: AuthService, private store: Store<AppState>, private router: Router) {
  }

  ngOnInit(): void {
    this.error$ = this.store.select(state => state.user.error);
    this.loading$ = this.store.select(state => state.user.loading);
    this.subscription = this.store.select(state => state.user.authorized)
      .subscribe((authenticated) => {
        if (authenticated) {
          this.router.navigate(['/admin', 'home']);
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(authData) {
    this.authService.login(authData.email, authData.password);
  }

}
