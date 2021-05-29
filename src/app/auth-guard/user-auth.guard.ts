import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  
  tokenVerify:boolean;
  constructor (private _authService: AuthService,
               private _router : Router) { }

  canActivate():boolean{

    if(this._authService.loggedIn()){
      return true;
    }
    else{
      this._router.navigate(['/login'])
      return false;
    }
  }               


  
}
