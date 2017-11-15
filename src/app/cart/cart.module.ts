import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import {CartComponent} from './cart.component';
import {CartWidgetComponent} from './cart-widget/cart-widget.component';
import {CartService} from './cart.service';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    CartWidgetComponent,
  ],
  declarations: [
    CartWidgetComponent,
    CartComponent
  ],
  providers: [
    CartService
  ],
})
export class CartModule {
}
