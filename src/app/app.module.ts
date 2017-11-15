import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CategoryService} from './products/category.service';
import {ProductService} from './products/product.service';
import {StoreModule} from '@ngrx/store';
import {AppEffects, AppReducers} from './store/app.store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth-guard.service';
import {OrderService} from './admin/orders/order.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './auth-interceptor';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared.module';
import {ProductsModule} from './products/products.module';
import {CheckoutModule} from './checkout/checkout.module';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot(AppReducers),
    EffectsModule.forRoot(AppEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    ProductsModule,
    CheckoutModule,
    AuthModule,
  ],
  providers: [
    CategoryService,
    ProductService,
    AuthService,
    AuthGuard,
    OrderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
