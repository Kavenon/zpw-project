import {Injectable} from '@angular/core';
import {Product} from './product';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Pagination} from './products-list/pagination';
import {ProductFilterQuery} from './products-list/product-filter-query';
import {ProductResponse} from './product-response';
import {HttpClient} from '@angular/common/http';
import {API} from '../config';
import 'rxjs/add/operator/map';
import {AppState} from '../store/app.store';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/filter';

@Injectable()
export class ProductService {


  constructor(private http: HttpClient, private store: Store<AppState>) {
  }

  getAllProducts(): Observable<ProductResponse> {

    return this.http.get(API + '/products.json')
      .map((data: any[]) => {
        return {
          items: data,
          total: data.length,
        };
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
          currency: 'USD',
        },
        categoryId: null
      });
    } else {
      return this.getAllProducts()
        .switchMap(data => {
          return Observable.of(data.items.find(product => product.id === productId));
        });
    }
  }

  deleteProduct(productId: number): Observable<Object> {
    return Observable.of({});
  }

  saveProduct(product: Product): Observable<Product> {
    const newProduct = Object.assign({}, product);
    if (!newProduct.id) {
      newProduct.id = new Date().getTime();
    }
    return Observable.of(newProduct);
  }

  getProducts(query: ProductFilterQuery, pagination: Pagination): Observable<ProductResponse> {

    return this.getAllProducts()
      .switchMap(data => {
        const filtered = this.filterProducts(data.items, query);
        const start = (pagination.page - 1) * pagination.perPage;
        const end = start + pagination.perPage;

        return Observable.of({
          items: this.subarray(filtered, start, end),
          total: filtered.length
        });
      });

  }

  getTotal(query: ProductFilterQuery): Promise<number> {

    return this.getAllProducts()
      .switchMap(data => {
        const filtered = this.filterProducts(data.items, query);
        return Observable.of(filtered.length);
      }).toPromise();
  }

  saveInFirebase(items: Product[]): Observable<Object> {
    console.log('saving in firebase', items);
    return this.http.put(API + '/products.json', items);
  }

  // This is only used for mocked data. Will be removed after implementing API
  // ==========================================================================
  filterProducts(products: Product[], query: ProductFilterQuery){
    return products
      .filter(product => {
        return this.matchesCategory(product, query);
      })
      .filter((product) => this.matchesName(product, query))
      .filter(product => this.matchesPrice(product, query));
  }

  private matchesName(product: Product, query: ProductFilterQuery){
    return !query.term || product.name.toLowerCase().indexOf(query.term.toLowerCase()) > -1 || product.description.toLowerCase().indexOf(query.term.toLowerCase()) > -1;
  }

  private matchesCategory(product: Product, query: ProductFilterQuery) {
    return !query.categories || query.categories.length === 0 || query.categories.indexOf(product.categoryId) > -1;
  }

  private matchesPrice(product: Product, query: ProductFilterQuery) {
    return product.price.value >= query.price[0] && product.price.value <= query.price[1];
  }

  private subarray(array: any[], start: number, end: number) {
    return array.slice(start, end);
  }
  // ==========================================================================


}
