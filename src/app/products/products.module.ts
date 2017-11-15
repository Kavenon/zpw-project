import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import {NouisliderModule} from 'ng2-nouislider';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CategoriesComponent} from './product-list/categories/categories.component';
import {ProductComponent} from './product-list/product/product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {PriceFilterComponent} from './product-list/price-filter/price-filter.component';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [SharedModule, NouisliderModule, NgbModule.forRoot(), RouterModule
  ],
  exports: [],
  declarations: [CategoriesComponent, ProductComponent, ProductListComponent, PriceFilterComponent],
  providers: [],
})
export class ProductsModule {
}
