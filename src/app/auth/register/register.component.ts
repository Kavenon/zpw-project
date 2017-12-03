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
        this.authService
            .register(authData.email, authData.password)
          .then(_ => this.router.navigate(['/login']))
          .catch(error => this.toast.error(error.message, 'Błąd'));
    }

}
