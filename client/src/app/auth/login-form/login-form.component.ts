import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {

  authForm: FormGroup;
  @Input() loading: boolean;
  @Input() error: string;
  @Output() onSubmit = new EventEmitter<{ email: string, password: string }>();

  constructor(private authService: AuthService) {
    this.authForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.min(6)]),
    });
  }

  submit() {
    this.onSubmit.emit(this.authForm.value);
  }

  fbLogin() {
    this.authService.loginFb();
  }
}
