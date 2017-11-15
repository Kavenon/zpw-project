import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [],
  providers: [],
})
export class SharedModule {
}
