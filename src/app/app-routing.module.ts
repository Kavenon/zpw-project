import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CartComponent} from './cart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {AuthGuard} from './auth/auth-guard.service';
import {CheckoutDoneComponent} from './checkout/checkout-done/checkout-done.component';
import {LoginComponent} from './auth/login/login.component';
import {ProductListComponent} from './products/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ProductListComponent
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
    path: 'checkout-done',
    component: CheckoutDoneComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [AuthGuard],
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
