import {NgModule} from '@angular/core';
import {CheckoutComponent} from './checkout.component';
import {CheckoutDoneComponent} from './checkout-done/checkout-done.component';
import {SharedModule} from '../shared.module';


@NgModule({
  imports: [SharedModule],
  exports: [],
  declarations: [CheckoutComponent, CheckoutDoneComponent],
  providers: [],
})
export class CheckoutModule {
}
