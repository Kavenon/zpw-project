import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductsListComponent} from './products/products-list/products-list.component';
import {CartComponent} from './cart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {AdminHomeComponent} from './admin/admin-home/admin-home.component';
import {LoginComponent} from './user/login/login.component';
import {AuthGuard} from './auth/auth-guard.service';
import {OrdersComponent} from './admin/orders/orders.component';
import {ProductsComponent} from './admin/products/products.component';
import {OrderDetailsComponent} from './admin/orders/order-details/order-details.component';

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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: AdminHomeComponent,
      },
      {
        path: 'order',
        component: OrdersComponent,
        children: [
          {
            path: ':id',
            component: OrderDetailsComponent
          }
        ]
      },
      {
        path: 'product',
        component: ProductsComponent,
      },
      {
        path: '',
        redirectTo: '/admin/home',
        pathMatch: 'full'
      }
    ]
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
