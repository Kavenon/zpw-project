import {Injectable} from '@angular/core';
import {Product} from './product';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Pagination} from './product-list/pagination';
import {ProductFilterQuery} from './product-list/product-filter-query';
import {ProductResponse} from './product-response';
import {HttpClient, HttpParams} from '@angular/common/http';
import {API} from '../config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class ProductService {


  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get(API + '/product/all');
  }

  getProductToEdit(productId?: string): Observable<Product> {
    if (!productId) {
      return Observable.of({
        _id: null,
        name: '',
        description: '',
        price: {
          value: null,
          currency: 'USD',
        },
        categoryId: null
      });
    } else {
      return this.http.get(API + '/product/' + productId);
    }
  }

  deleteProduct(productId: string): Observable<Object> {
    return this.http.delete(API + '/product/' + productId);
  }

  saveProduct(product: Product): Observable<Product> {
    const newProduct = Object.assign({}, product);
    if (!newProduct._id) {
      return this.http.post(API + '/product', product);
    } else {
      return this.http.put(API + '/product/' + product._id, product);
    }
  }

  getProducts(query: ProductFilterQuery, pagination: Pagination): Observable<ProductResponse> {

    let httpParams = new HttpParams();
    httpParams = httpParams.set('filter', (JSON.stringify(query)));
    httpParams = httpParams.set('pagination', (JSON.stringify(pagination)));
    return this.http.get(API + '/product', {params: httpParams});

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
