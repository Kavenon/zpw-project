import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {AppState} from '../../../store/app.store';
import {Product} from '../../../products/product';
import {LoadProductsAction} from '../../store/products/load-products.action';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../products/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-promo',
  templateUrl: './product-promo.component.html',
})
export class ProductPromoComponent implements OnInit {

  products$: Observable<Product[]>;
  promoForm: FormGroup;

  constructor(private store: Store<AppState>, private productService: ProductService, private router: Router) {
    this.promoForm = new FormGroup({
      'products': new FormControl([], Validators.required),
      'discount': new FormControl(10, [Validators.min(1), Validators.max(100), Validators.required]),
      'duration': new FormControl(3, [Validators.required, Validators.min(1)]),
    });
  }

  ngOnInit() {
    this.store.dispatch(new LoadProductsAction());
    this.products$ = this.store.select(state => state.adminProducts.items);
  }

  submit() {
    this.productService.createPromo(this.promoForm.value)
      .subscribe(_ => {
        this.router.navigate(['/admin/product']);
      });
  }

}
