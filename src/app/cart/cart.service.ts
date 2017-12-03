import {Injectable} from '@angular/core';
import {CheckoutForm} from '../checkout/checkout-form';
import {AppState} from '../store/app.store';
import {Store} from '@ngrx/store';
import {SaveOrderAction} from '../admin/store/orders/save-order.action';
import {OrderStatus} from '../checkout/order';
import {CartState} from '../store/cart/cart.store';
import {HttpClient} from '@angular/common/http';
import {API} from '../config';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CartService {

    constructor(private store: Store<AppState>, private http: HttpClient) {
    }

    createOrder(checkoutForm: CheckoutForm) {
        this.store.select(state => state.cart).take(1).subscribe(
            state => {
                const order = this.buildOrder(checkoutForm, state);
                this.store.dispatch(new SaveOrderAction(order));
            }
        );
    }

    getCart(): Observable<CartState> {
        return this.http.get(API + '/user/cart');
    }

    saveCart(cart: CartState) {
        return this.http.post(API + '/user/cart', cart);
    }

    private buildOrder(checkoutForm: CheckoutForm, state) {
        return {
            _id: new Date().getTime(),
            uid: null,
            name: checkoutForm.name,
            street: checkoutForm.street,
            totalValue: state.totalValue,
            items: state.items.map(item => {
                return {
                    _id: item.product._id,
                    name: item.product.name,
                    price: item.product.price,
                    amount: item.amount
                };
            }),
            status: 'PENDING' as OrderStatus
        };
    }


}


