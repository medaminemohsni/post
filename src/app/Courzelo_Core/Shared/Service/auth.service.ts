import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../Common/app.constants';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(credentials: { username: any; password: any; }): Observable<any> {
    return this.http.post(AppConstants.AUTH_API + 'signin', {
      email: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user: { displayName: any; email: any; password: any; matchingPassword: any; }): Observable<any> {
    return this.http.post(AppConstants.AUTH_API + 'signup', {
      displayName: user.displayName,
      email: user.email,
      password: user.password,
      matchingPassword: user.matchingPassword,
      socialProvider: 'LOCAL'
    }, httpOptions);
  }

  forgetPassword(user: {email: any}): Observable<any>{
    return this.http.post(AppConstants.AUTH_API + 'forgot_password?email=' + user.email, {
      email: user.email
    });
  }

  resetPassword(password: any, resetPasswordToken: any): Observable<any>{
    return this.http.post(AppConstants.AUTH_API + 'reset_password?token=' + resetPasswordToken + '&password=' + password, {
      password: password,
      resetPasswordToken: resetPasswordToken
    });
  }

  confirmEmail(registerToken: any): Observable<any>{
    return this.http.post(AppConstants.AUTH_API + 'confirm_email?token=' + registerToken, {
      registerToken: registerToken
    });
  }
}
