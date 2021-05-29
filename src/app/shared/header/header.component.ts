import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { headerTitleService } from '../../services/header-dropdown.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit
 {

  subscription : Subscription;
  userData = '';
  constructor( private _router : Router,
               public _authService : AuthService,
               private _headerService : headerTitleService ) { }

  ngOnInit(): void {
    
    if(this._authService.loggedIn()){
      this._headerService.setUser();
    }
    this._headerService.title.subscribe(data=>{
      this.userData = data;
    });

  }

  LogoutUser(){
    this._authService.logOut();
  }

}
