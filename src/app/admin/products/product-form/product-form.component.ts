import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../products/product';
import {Category} from '../../../products/category';
import {API} from '../../../config';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {

  API_URL = API;
  productForm: FormGroup;
  @Input() product: Product;
  @Input() categories: Category[];
  @Output() onSubmit = new EventEmitter<Product>();

  constructor() {
    this.productForm = new FormGroup({
      '_id': new FormControl(null),
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'price': new FormGroup({
        'value': new FormControl(null, Validators.required),
        'currency': new FormControl(null, Validators.required),
      }),
      'categoryId': new FormControl(null, Validators.required),
      'photos': new FormArray([])
    });
  }

  get photos(): FormArray {
    return this.productForm.get('photos') as FormArray;
  }

  ngOnInit() {
    this.productForm.patchValue(this.product);
    this.product.photos.forEach(photo => this.addPhoto(photo));
  }

  submit() {
    this.onSubmit.emit(this.productForm.value);
  }

  onUploadSuccess($event) {
    this.addPhoto($event[1].url);
  }

  deleteImage(index) {
    this.photos.removeAt(index);
  }

  private addPhoto(url) {
    const formArray = this.productForm.get('photos') as FormArray;
    formArray.push(new FormControl(url));
  }

}
