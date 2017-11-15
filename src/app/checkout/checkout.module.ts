import {NgModule} from '@angular/core';
import {CheckoutComponent} from './checkout.component';
import {CheckoutDoneComponent} from './checkout-done/checkout-done.component';
import {SharedModule} from '../shared.module';
import {CheckoutFormComponent} from './checkout-form/checkout-form.component';


@NgModule({
  imports: [SharedModule],
  exports: [],
  declarations: [CheckoutComponent, CheckoutDoneComponent, CheckoutFormComponent],
  providers: [],
})
export class CheckoutModule {
}
