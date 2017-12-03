import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {LogoutAction} from '../../store/user/logout.action';
import {AppState} from '../../store/app.store';
import {UserState} from '../../store/user/user.store';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    isCollapsed = false;
    user: Observable<UserState>;

    constructor(private store: Store<AppState>) {
        this.user = this.store.select(state => state.user);
    }

    logout() {
        this.store.dispatch(new LogoutAction());
    }

}
