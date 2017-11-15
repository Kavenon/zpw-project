import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../products/product';
import {Category} from '../../../products/category';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;
  @Input() product: Product;
  @Input() categories: Category[];
  @Output() onSubmit = new EventEmitter<Product>();

  constructor() {
    this.productForm = new FormGroup({
      'id': new FormControl(null),
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
    this.productForm.setValue(this.product);
  }

  submit() {
    this.onSubmit.emit(this.productForm.value);
  }

}
