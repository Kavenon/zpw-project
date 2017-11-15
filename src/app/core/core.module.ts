import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from '../shared.module';
import {CartModule} from '../cart/cart.module';
import {RouterModule} from '@angular/router';

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
  providers: [],
})
export class CoreModule {
}
