import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import {AppRoutingModule} from './app-routing.module';
import { CategoriesComponent } from './products/products-list/categories/categories.component';
import {CategoryService} from './products/category.service';
import { ProductComponent } from './products/products-list/product/product.component';
import {ProductService} from './products/product.service';
import {NgbModule, NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { CartWidgetComponent } from './cart/cart-widget/cart-widget.component';
import {CartService} from './cart/cart.service';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    CategoriesComponent,
    ProductComponent,
    CartComponent,
    CartWidgetComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [CategoryService, ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
