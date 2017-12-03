import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import 'rxjs/add/operator/do';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const admin = this.authService.isAdmin();
        if (!admin) {
            this.router.navigate(['/login']);
        }
        return admin;
    }

}
