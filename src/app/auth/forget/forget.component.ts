import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  username;
  subscription : Subscription
  constructor( private _authService : AuthService,
               private title : Title,
               private _router : Router ) { this.title.setTitle("Forget Password") }

  ngOnInit(): void {
  }

  CheckUser(value){
    let userObj = { username : value }

    this._authService.ForgetPassword(userObj).subscribe(val=>{

      alert(`UserName ${val.email} Passowd is :  ${val.password}`)
      this._router.navigate(['/login']);

    },(err)=>{ alert(err.error.message), console.log(err.error.message) }) 
  }

}
