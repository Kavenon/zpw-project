import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartItem} from '../cart-item';
import {Product} from '../../products/product';

@Component({
    selector: 'app-cart-details',
    templateUrl: './cart-details.component.html',
})
export class CartDetailsComponent {

    @Input() items: CartItem[];
    @Output() onDeleteItem = new EventEmitter<Product>();
    @Output() onAddItem = new EventEmitter<Product>();

    deleteItem(product: Product) {
        this.onDeleteItem.emit(product);
    }

    addItem(product: Product) {
        this.onAddItem.emit(product);
    }
}
