import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/auth/auth.service';
import { headerTitleService } from 'src/app/services/header-dropdown.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userId;
  userEmail;
  dummyEmail;
  constructor( private titleService : Title,
               private _headerService : headerTitleService,
               private _authService : AuthService ) { 
      this.titleService.setTitle('Edit-User')
    }


  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(){
    this._headerService.title.subscribe(val=>{
      this.userId = val['_id']
      this.userEmail = val['email']
      this.dummyEmail = this.userEmail 
    })
  }  


  UpdateUser(val: NgForm){

    if(val.valid){
      let userObj = val.value;
      userObj['userId'] = this.userId; 

      this._authService.UpdateUser(userObj).subscribe(val=>{
        this._headerService.setUser();
        alert(val.message)
      },err => { alert(err.error) })
    }
  }



}
