import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Order} from '../../checkout/order';
import {Injectable} from '@angular/core';
import 'rxjs/add/observable/from';
import {API} from '../../config';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Order[]> {
    return this.http.get(API + '/order');
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post(API + '/order', order);
  }

  doneOrder(order: Order): Observable<Order> {
    return this.http.post(API + '/order/' + order._id + '/done', {});
  }
}
