import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import {AppRoutingModule} from './app-routing.module';
import { CategoriesComponent } from './products/products-list/categories/categories.component';
import {CategoryService} from './products/category.service';
import { ProductComponent } from './products/products-list/product/product.component';
import {ProductService} from './products/product.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { CartWidgetComponent } from './cart/cart-widget/cart-widget.component';
import {CartService} from './cart/cart.service';
import { CheckoutComponent } from './checkout/checkout.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {AppEffects, AppReducers} from './store/app.store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

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
    ReactiveFormsModule,
    NgbModule.forRoot(),
    StoreModule.forRoot(AppReducers),
    EffectsModule.forRoot(AppEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [CategoryService, ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
