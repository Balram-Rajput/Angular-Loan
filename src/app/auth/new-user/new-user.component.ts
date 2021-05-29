import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { headerTitleService } from 'src/app/services/header-dropdown.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  RegisterForm: FormGroup;
  constructor( private fb : FormBuilder,
               private userService: AuthService,
               private _router: Router,
               private _headerService : headerTitleService ) { }

  ngOnInit(): void {
    this.RegisterForm = this.fb.group({
      'email' : new FormControl(),
      'password': new FormControl()
    })
  }

  // Post User Registration
  RegisterUserForm(formValue:FormGroup){
    
     if(formValue.valid){
      this.userService.registerUser(formValue.value).subscribe(val=>{        
        alert(val.message)
        
        if(val.status==200){
          localStorage.setItem('token',val.token);
          localStorage.setItem('userId',val.userId);
          this._headerService.setUser();
          this._router.navigate(['/dashboard'])
        }
      },err=>{alert(err.error)})
     } 
  }

}
