import {Component} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  constructor(private authService: AuthService, private router: Router, private toast: ToastrService) {
  }

  onSubmit(authData) {
    if (authData.email.indexOf('admin') > -1) {
      this.toast.error('Niedozwolony adres email');
      return;
    }
    this.authService
      .register(authData.email, authData.password)
      .then(_ => this.router.navigate(['/login']));
  }

}
