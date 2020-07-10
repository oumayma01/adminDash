import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YouHaveToLoginComponent } from './you-have-to-login/you-have-to-login.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';


const routes: Routes = [
{
    path: "login",
    component: DoctorLoginComponent
  }, {
    path: "notauthorized",
    component: YouHaveToLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
