import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../../environments/environment';

import { Observable } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {}
  login(loginBody: any, contactId: String = ''): any {
    return this.httpClient
      .post(environment.api.user + '/login/' , loginBody)
      .toPromise()
      .catch(this.handleError);
  }  
  register(registerBody: any): any {
    return this.httpClient
      .post(environment.api.user + '/register/' , registerBody)
      .toPromise()
      .catch(this.handleError);
  }  
   loginSocial(registerBody: any): any {
    return this.httpClient
      .post(environment.api.user + '/login/social' , registerBody)
      .toPromise()
      .catch(this.handleError);
  } 
  
  private   handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response || error) {
      const body = error.json() || '';
      const err = JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

}
