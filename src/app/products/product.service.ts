import {Injectable} from '@angular/core';
import {Product} from './product';
import {products} from './product.mock';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Pagination} from './products-list/pagination';
import {ProductFilterQuery} from './products-list/product-filter-query';
import {ProductResponse} from './product-response';

@Injectable()
export class ProductService {

  getAllProducts(): Observable<ProductResponse> {
    return Observable.of({
      items: products,
      total: products.length
    });
  }

  getProductToEdit(productId?: number): Observable<Product> {
    if (!productId) {
      return Observable.of({
        id: null,
        name: '',
        description: '',
        price: {
          value: null,
          currency: null,
        },
        categoryId: null
      });
    } else {
      // todo http
      return Observable.of({
        id: 1,
        name: 'Edycja',
        description: 'Edycja',
        price: {
          value: 10,
          currency: 'USD',
        },
        categoryId: 1
      });
    }
  }
  deleteProduct(productId: number): Observable<Object> {
    return Observable.of({});
    // todo: relete
  }

  saveProduct(product: Product): Observable<Object> {
    if (product.id) {
      // update
    }
    else {
      // save
    }
    return Observable.of({});
  }

  getProducts(query: ProductFilterQuery, pagination: Pagination): Observable<ProductResponse> {

    const filtered = this.filterProducts(products, query);
    const start = (pagination.page - 1) * pagination.perPage;
    const end = start + pagination.perPage;

    return Observable.of({
      items: this.subarray(filtered, start, end),
      total: filtered.length
    });

  }

  getTotal(query: ProductFilterQuery): Promise<number> {
    const filtered = this.filterProducts(products, query);
    return Promise.resolve(filtered.length);
  }

  // This is only used for mocked data. Will be removed after implementing API
  // ==========================================================================
  filterProducts(products: Product[], query: ProductFilterQuery){
    return products
      .filter(product => {
        return this.matchesCategory(product, query);
      })
      .filter((product) => this.matchesName(product, query));
  }

  private matchesName(product: Product, query: ProductFilterQuery){
    return !query.term || product.name.toLowerCase().indexOf(query.term.toLowerCase()) > -1 || product.description.toLowerCase().indexOf(query.term.toLowerCase()) > -1;
  }

  private matchesCategory(product: Product, query: ProductFilterQuery) {
    return !query.categories || query.categories.length === 0 || query.categories.indexOf(product.categoryId) > -1;
  }

  private subarray(array: any[], start: number, end: number) {
    return array.slice(start, end);
  }
  // ==========================================================================

}
