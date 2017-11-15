import {NgModule} from '@angular/core';
import {AdminProductsListComponent} from './products/products-list/products-list.component';
import {OrdersComponent} from './orders/orders.component';
import {OrdersListComponent} from './orders/orders-list/orders-list.component';
import {OrderDetailsComponent} from './orders/order-details/order-details.component';
import {ProductsComponent} from './products/products.component';
import {ProductFormComponent} from './products/product-form/product-form.component';
import {ProductEditComponent} from './products/product-edit/product-edit.component';
import {HomeComponent} from './home/home.component';
import {AdminRoutingModule} from './admin-routing.module';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  exports: [],
  declarations: [
    HomeComponent,
    ProductsComponent,
    OrdersComponent,
    AdminProductsListComponent,
    OrdersListComponent,
    OrderDetailsComponent,
    ProductsComponent,
    ProductFormComponent,
    ProductEditComponent,
  ],
  providers: [],
})
export class AdminModule {
}
