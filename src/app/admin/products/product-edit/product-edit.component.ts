import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState} from '../../../store/app.store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Product} from '../../../products/product';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../../products/category';
import {LoadCategoriesAction} from '../../../store/categories/load-categories.action';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {SaveProductAction} from '../../store/products/save-product.action';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit, OnDestroy {

  productForm: FormGroup;
  product$: Observable<Product>;
  categories$: Observable<Category[]>;
  isNewProduct: boolean;
  subscription: Subscription;

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) {
    this.productForm = new FormGroup({
      'id': new FormControl(null, Validators.required),
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'price': new FormGroup({
        'value': new FormControl(null, Validators.required),
        'currency': new FormControl(null, Validators.required),
      }),
      'categoryId': new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {
    this.store.dispatch(new LoadCategoriesAction());
    this.isNewProduct = this.activatedRoute.snapshot.params.id === 'new';
    this.product$ = this.store.select(state => state.adminProducts.editProduct);
    this.subscription = this.product$.subscribe(product => {
      this.productForm.setValue(product);
    });
    this.categories$ = this.store.select(state => state.categories.items);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.store.dispatch(new SaveProductAction(this.productForm.value));
  }
}
