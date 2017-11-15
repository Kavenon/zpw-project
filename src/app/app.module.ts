import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductsListComponent} from './products/products-list/products-list.component';
import {AppRoutingModule} from './app-routing.module';
import {CategoriesComponent} from './products/products-list/categories/categories.component';
import {CategoryService} from './products/category.service';
import {ProductComponent} from './products/products-list/product/product.component';
import {ProductService} from './products/product.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CartComponent} from './cart/cart.component';
import {CartWidgetComponent} from './cart/cart-widget/cart-widget.component';
import {CartService} from './cart/cart.service';
import {CheckoutComponent} from './checkout/checkout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {AppEffects, AppReducers} from './store/app.store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {NouisliderModule} from 'ng2-nouislider';
import {AdminHomeComponent} from './admin/admin-home/admin-home.component';
import {LoginComponent} from './user/login/login.component';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth-guard.service';
import {OrdersComponent} from './admin/orders/orders.component';
import {OrdersListComponent} from './admin/orders/orders-list/orders-list.component';
import {OrderDetailsComponent} from './admin/orders/order-details/order-details.component';
import {ProductsComponent} from './admin/products/products.component';
import {OrderService} from './admin/orders/order.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ProductFormComponent} from './admin/products/product-form/product-form.component';
import {ProductEditComponent} from './admin/products/product-edit/product-edit.component';
import {AdminProductsListComponent} from './admin/products/products-list/products-list.component';
import {CheckoutDoneComponent} from './checkout/checkout-done/checkout-done.component';
import {AuthInterceptor} from './auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    AdminProductsListComponent,
    CategoriesComponent,
    ProductComponent,
    CartComponent,
    CartWidgetComponent,
    CheckoutComponent,
    AdminHomeComponent,
    LoginComponent,
    OrdersComponent,
    OrdersListComponent,
    OrderDetailsComponent,
    ProductsComponent,
    ProductFormComponent,
    ProductEditComponent,
    CheckoutDoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    StoreModule.forRoot(AppReducers),
    EffectsModule.forRoot(AppEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    NouisliderModule,
  ],
  providers: [CategoryService, ProductService, CartService, AuthService, AuthGuard, OrderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
