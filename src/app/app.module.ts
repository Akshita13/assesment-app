/**
 * @author akshita kapadia
 * htttpclient module use for http request response
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

//-------------------------------------------------------------//


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ListModule} from 'student-package';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ListModule
       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
