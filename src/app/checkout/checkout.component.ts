import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CartService} from '../cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {

  checkoutForm: FormGroup;

  constructor(private cartService: CartService) {
    this.checkoutForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'street': new FormControl(null, Validators.required)
    });
  }

  checkoutSubmit() {
    if (!this.checkoutForm.valid) {
      return;
    }
    this.cartService.createOrder(this.checkoutForm.value);
  }

}
