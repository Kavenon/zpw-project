import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup;
  constructor() {
    this.checkoutForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'street': new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {

  }

}
