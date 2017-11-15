import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [],
  providers: [],
})
export class SharedModule {
}
