import {NgModule} from '@angular/core';
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
import {ProductListComponent} from './products/product-list/product-list.component';
import {DropzoneConfigInterface, DropzoneModule} from 'ngx-dropzone-wrapper';
import {API} from '../config';
import {CommonComponentsModule} from '../common-components.module';
import {ProductPromoComponent} from './products/product-promo/product-promo.component';

const DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: API + '/admin/cloud/upload',
  maxFilesize: 2,
  acceptedFiles: 'image/*',
};

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        DropzoneModule.forRoot(DROPZONE_CONFIG),
        CommonComponentsModule
    ],
    exports: [],
    declarations: [
        HomeComponent,
        ProductsComponent,
        OrdersComponent,
        ProductListComponent,
        OrdersListComponent,
        OrderDetailsComponent,
        ProductsComponent,
        ProductFormComponent,
        ProductEditComponent,
        ProductPromoComponent,
    ],
    providers: [],
})
export class AdminModule {
}
