import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-checkout-form',
    templateUrl: './checkout-form.component.html',
})
export class CheckoutFormComponent {

    @Output() onSubmit = new EventEmitter<{ name: string, street: string }>();

    checkoutForm: FormGroup;

    constructor() {
        this.checkoutForm = new FormGroup({
            'name': new FormControl(null, Validators.required),
            'street': new FormControl(null, Validators.required)
        });
    }

    checkoutSubmit() {
        if (!this.checkoutForm.valid) {
            return;
        }
        this.onSubmit.emit(this.checkoutForm.value);
    }
}
