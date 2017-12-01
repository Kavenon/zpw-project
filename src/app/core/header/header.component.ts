import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {LogoutAction} from '../../store/user/logout.action';
import {AppState} from '../../store/app.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isCollapsed = false;
  authorized: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.authorized = this.store.select(state => state.user.authorized);
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }

}
