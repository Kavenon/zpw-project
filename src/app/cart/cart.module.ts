import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import {CartComponent} from './cart.component';
import {CartWidgetComponent} from './cart-widget/cart-widget.component';
import {CartService} from './cart.service';
import {CartDetailsComponent} from './cart-details/cart-details.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    CartWidgetComponent,
  ],
  declarations: [
    CartWidgetComponent,
    CartComponent,
    CartDetailsComponent
  ],
  providers: [
    CartService
  ],
})
export class CartModule {
}
