import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import {NouisliderModule} from 'ng2-nouislider';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CategoriesComponent} from './product-list/categories/categories.component';
import {ProductComponent} from './product-list/product/product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {PriceFilterComponent} from './product-list/price-filter/price-filter.component';
import {RouterModule} from '@angular/router';
import {CommonComponentsModule} from '../common-components.module';
import {ProductDetailsComponent} from './product-list/product-details/product-details.component';


@NgModule({
  imports: [SharedModule, CommonComponentsModule, NouisliderModule, NgbModule.forRoot(), RouterModule
  ],
  exports: [],
  declarations: [CategoriesComponent, ProductComponent, ProductListComponent, PriceFilterComponent, ProductDetailsComponent],
  providers: [],
  entryComponents: [ProductDetailsComponent]
})
export class ProductsModule {
}
