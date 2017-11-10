import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductsListComponent} from './products/products-list/products-list.component';
import {CartComponent} from './cart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';

const routes: Routes = [
  {
    path: 'list',
    component: ProductsListComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {

}
