import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  checkoutForm: FormGroup;

  private static markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        control.controls.forEach(c => CheckoutComponent.markFormGroupTouched(c));
      }
    });
  }

  constructor() {
    this.checkoutForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'street': new FormControl(null, Validators.required)
    });
  }

  checkoutSubmit() {
    if (!this.checkoutForm.valid) {
      CheckoutComponent.markFormGroupTouched(this.checkoutForm);
      return;
    }
  }

}
