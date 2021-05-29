import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroment.dev';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userUrl = environment.USER_AUTH_BASE_URL;
  constructor( private httpClient: HttpClient,
               private _router : Router ) { }

  registerUser(obj):Observable<any>{
    return this.httpClient.post<any>(this.userUrl + 'register',obj)
  }

  loginUser(obj):Observable<any>{
    return this.httpClient.post<any>(this.userUrl + 'login',obj)
  }

  OneUserDetails(userId):Observable<any>{
      return this.httpClient.get<any>(this.userUrl + 'view/' + userId)      
  }

  UpdateUser(userObj):Observable<any>{
    // pass {userId:'', password:''}
    return this.httpClient.post<any>(this.userUrl + 'update-user',userObj )
  }

  ResetPassword(userObj):Observable<any>{
    // pass {userId:'', password:''}
    return this.httpClient.post<any>(this.userUrl + 'reset-password',userObj )
  }

  ForgetPassword(userOb):Observable<any>{
    return this.httpClient.post<any>(this.userUrl + 'forget-password',userOb)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getUserId(){
    return localStorage.getItem('userId');
  }

  logOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    this._router.navigate(['/login'])
  }

}
