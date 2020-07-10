import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from "../login.service";
import { AuthServiceZ } from '../../../authentification/auth-service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.scss']
})
export class DoctorLoginComponent implements OnInit {
  clickLogin = false
  submitted = false
  loginForm = this.fb.group({
    "email": ['', Validators.required],
    "password": ['', Validators.required]
  })
  get f() { return this.loginForm.controls; }
  days = []
  months = []
  years = []
  today = new Date()
  constructor(
    private router: Router,
    private authenticationService: AuthServiceZ,
    private fb: FormBuilder, private loginService: LoginService) {





    for (let index = 1; index < 32; index++) {
      this.days.push(index);
    }
    for (let index = 1; index < 13; index++) {
      this.months.push(index);
    }
    for (let index = 1910; index <= this.today.getFullYear(); index++) {
      this.years.push(index);
    }
  }
  catcherror
  error
  ngOnInit(): void {
    this.clickLogin = false;
    this.error = null;
 
  }



  selectGender(gender) {
    this.loginForm.patchValue({
      sexe: gender
    });
  }


  login() {
    this.submitted = true;

    //stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      const registerBody = {
        "email": this.f.email.value,
        "password": this.f.password.value,
      }

      this.loginService.login(registerBody).then(d => {
        this.authenticationService.setCredentials(d, true);
        this.router.navigate(['/']);
      }).catch(e=>{
        this.error="Email address or password is incorrect"

      })
    }

  }

  loginViaSocial(user) {

    if (user) {
      //stop here if form is invalid
      const registerBody = {
        "name": user.name,
        "lastName": user.lastName,
        "email": user.email,
        "sexe": 0,
        "password": "",
        "tel": "",
        "birthday": null,
        "provider": user.provider,
        "fbId": user.provider == "FACEBOOK" ? user.id : null,
        "googleId": user.provider == "GOOGLE" ? user.id : null,
        "photoUrl": user.photoUrl
      }

      this.loginService.loginSocial(registerBody).then(d => {
        this.authenticationService.setCredentials(d, true);
        this.router.navigate(['/']);
      })
    }

  }






 
}
