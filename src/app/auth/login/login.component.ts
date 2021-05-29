import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { headerTitleService } from 'src/app/services/header-dropdown.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;

  constructor( private fb: FormBuilder,
               private authService: AuthService,
               private _router : Router,
               private _headerService : headerTitleService ) { }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      'email': new FormControl(),
      'password': new FormControl()
    })
  }

  loginUserData(formValue:FormGroup){

    if(formValue.valid){
      this.authService.loginUser(formValue.value).subscribe(val=>{
        
        alert(val.message);
        localStorage.setItem('token',val.token);
        localStorage.setItem('userId',val.userId);

        this._headerService.setUser();
        this._router.navigate(['/customers']);
      },
      err=>{ alert(err.error.message) }
      );
    }   
  }

}
