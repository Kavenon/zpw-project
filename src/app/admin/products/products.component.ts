import {Component, OnInit} from '@angular/core';
import {AppState} from '../../store/app.store';
import {Store} from '@ngrx/store';
import {Product} from '../../products/product';
import {Observable} from 'rxjs/Observable';
import {EditProductAction} from '../store/products/edit-product.action';
import {DeleteProductAction} from '../store/products/delete-product.action';
import {LoadProductsAction} from '../store/products/load-products.action';
import {Router} from '@angular/router';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {

    products$: Observable<Product[]>;

    constructor(private store: Store<AppState>, private router: Router) {

    }

    ngOnInit() {
        this.store.dispatch(new LoadProductsAction());
        this.products$ = this.store.select(state => state.adminProducts.items);
    }

    onEditProduct(product: Product) {
        this.store.dispatch(new EditProductAction(product._id));
    }

    onDeleteProduct(product: Product) {
        this.store.dispatch(new DeleteProductAction(product._id));
    }

    onAddProduct() {
        this.store.dispatch(new EditProductAction());
    }

    onAddPromo() {
        this.router.navigate(['/admin/product/promo']);
    }

}
