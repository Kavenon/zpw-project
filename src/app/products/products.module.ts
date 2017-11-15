import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import {CategoriesComponent} from './products-list/categories/categories.component';
import {ProductComponent} from './products-list/product/product.component';
import {NouisliderModule} from 'ng2-nouislider';
import {ProductsListComponent} from './products-list/products-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [SharedModule, NouisliderModule, NgbModule.forRoot(),
  ],
  exports: [],
  declarations: [CategoriesComponent, ProductComponent, ProductsListComponent],
  providers: [],
})
export class ProductsModule {
}
