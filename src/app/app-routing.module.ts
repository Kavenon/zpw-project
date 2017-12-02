import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CartComponent} from './cart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {AuthGuard} from './auth/auth-guard.service';
import {CheckoutDoneComponent} from './checkout/checkout-done/checkout-done.component';
import {LoginComponent} from './auth/login/login.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {RegisterComponent} from './auth/register/register.component';
import {AdminGuard} from './auth/admin-guard.service';
import {CheckoutHistoryComponent} from './checkout/checkout-history/checkout-history.component';

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
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'history',
    component: CheckoutHistoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [AdminGuard],
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
