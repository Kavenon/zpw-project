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

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    CategoriesComponent,
    ProductComponent,
    CartComponent,
    CartWidgetComponent,
    CheckoutComponent,
    AdminHomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
  providers: [CategoryService, ProductService, CartService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
