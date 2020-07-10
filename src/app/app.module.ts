import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthServiceZ } from './authentification/auth-service.service';
import { AuthGuardService } from './authentification/auth-guard.service';
import { ApiPrefixInterceptor } from './authentification/api-prefix.interceptor';
import {HttpClient, HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthGuardService, AuthServiceZ, { provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
