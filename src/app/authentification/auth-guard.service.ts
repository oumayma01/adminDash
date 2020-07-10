import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthServiceZ } from './auth-service.service';


@Injectable()
export class AuthGuardService implements CanActivate  {

  constructor(public auth: AuthServiceZ, public router: Router,  public authService: AuthServiceZ) { }
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
       this.router.navigate(['/auth/notauthorized']);
      return false;
    } else {
        // this.router.navigate(['dashboard']);
       return true;
    }

  }

  setTitle(){
    
  }


}
