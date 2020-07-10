import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
// import ngx-translate and the http loader
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { YouHaveToLoginComponent } from './you-have-to-login/you-have-to-login.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';







@NgModule({
  declarations: [DoctorLoginComponent, YouHaveToLoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    
    FormsModule, ReactiveFormsModule,
  ],
  providers:[],
})
export class LoginModule { }
