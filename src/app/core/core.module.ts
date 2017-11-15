import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from '../shared.module';
import {CartModule} from '../cart/cart.module';

@NgModule({
  imports: [
    SharedModule,
    CartModule
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
