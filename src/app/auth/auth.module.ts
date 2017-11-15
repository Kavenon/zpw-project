import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {SharedModule} from '../shared.module';


@NgModule({
  imports: [SharedModule],
  exports: [],
  declarations: [LoginComponent],
  providers: [],
})
export class AuthModule {
}
