import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from '../shared.module';
import {CartModule} from '../cart/cart.module';
import {RouterModule} from '@angular/router';
import {SocketService} from './socket.service';
import {NotificationService} from './notification.service';

@NgModule({
  imports: [
    SharedModule,
    CartModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ],
  providers: [
    SocketService,
    NotificationService
  ],
})
export class CoreModule {
}
