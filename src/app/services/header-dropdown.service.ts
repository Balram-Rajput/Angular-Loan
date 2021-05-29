import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AuthService } from "../auth/auth.service";

//headerTitle.service.ts
@Injectable()
export class headerTitleService {

  constructor (private _authService : AuthService) {}

  title = new BehaviorSubject('');

  setUser() {
    if(this._authService.loggedIn){
      this._authService.OneUserDetails(localStorage.getItem('userId')).subscribe(val=>{
        this.title.next(val);
      })
    }
    else{
      this.title.next('');
    }
  }

}