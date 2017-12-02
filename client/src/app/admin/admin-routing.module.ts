import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {OrdersComponent} from './orders/orders.component';
import {ProductsComponent} from './products/products.component';
import {ProductEditComponent} from './products/product-edit/product-edit.component';
import {ProductPromoComponent} from './products/product-promo/product-promo.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'order',
        component: OrdersComponent,
      },
      {
        path: 'product',
        children: [
          {
            path: 'promo',
            component: ProductPromoComponent,
          },
          {
            path: 'list',
            component: ProductsComponent,
          },
          {
            path: 'upsert/:id',
            component: ProductEditComponent
          },
          {
            path: '',
            redirectTo: '/admin/product/list',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/admin/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AdminRoutingModule {

}
