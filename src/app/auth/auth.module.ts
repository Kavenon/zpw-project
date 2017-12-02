import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {SharedModule} from '../shared.module';
import {LoginFormComponent} from './login-form/login-form.component';
import {RegisterComponent} from './register/register.component';

@NgModule({
  imports: [SharedModule],
  exports: [],
  declarations: [LoginComponent, LoginFormComponent, RegisterComponent],
  providers: [],
})
export class AuthModule {
}
