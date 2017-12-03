import {NgModule} from '@angular/core';
import {CheckoutComponent} from './checkout.component';
import {CheckoutDoneComponent} from './checkout-done/checkout-done.component';
import {SharedModule} from '../shared.module';
import {CheckoutFormComponent} from './checkout-form/checkout-form.component';
import {CheckoutHistoryComponent} from './checkout-history/checkout-history.component';
import {CheckoutHistoryListComponent} from './checkout-history/checkout-history-list/checkout-history-list.component';


@NgModule({
    imports: [SharedModule],
    exports: [],
    declarations: [CheckoutComponent, CheckoutDoneComponent, CheckoutFormComponent, CheckoutHistoryComponent, CheckoutHistoryListComponent],
    providers: [],
})
export class CheckoutModule {
}
