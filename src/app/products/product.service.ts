import {Injectable} from '@angular/core';
import {Product} from './product';
import {products} from './product.mock';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Pagination} from './products-list/pagination';
import {ProductFilterQuery} from './products-list/product-filter-query';

@Injectable()
export class ProductService {

  getProducts(query: ProductFilterQuery, pagination: Pagination): Observable<Product[]> {

    const filtered = this.filterProducts(products, query);
    const start = (pagination.page - 1) * pagination.perPage;
    const end = start + pagination.perPage;

    return Observable.of(this.subarray(filtered, start, end));

  }

  filterProducts(products: Product[], query: ProductFilterQuery){
    return products
      .filter(product => {
        return this.matchesCategory(product, query);
      })
      .filter((product) => this.matchesName(product, query));
  }

  private matchesName(product: Product, query: ProductFilterQuery){
    return !query.term || product.name.indexOf(query.term) > -1 || product.description.indexOf(query.term) > -1;
  }

  private matchesCategory(product: Product, query: ProductFilterQuery) {
    return !query.categories || query.categories.length === 0 || query.categories.indexOf(product.categoryId) > -1;
  }

  getTotal(query: ProductFilterQuery): Promise<number> {
    const filtered = this.filterProducts(products, query);

    return Promise.resolve(filtered.length);
  }

  subarray(array: any[], start: number, end: number) {
    return array.slice(start, end);
  }
}
