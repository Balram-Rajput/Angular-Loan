import { error } from '@angular/compiler/src/util';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { headerTitleService } from 'src/app/services/header-dropdown.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit,OnDestroy {
  
  userData;
  oldPassword;
  isOldPasswordBox = false;
  OldPassForm : FormGroup;

  SetNewPasswordForm: FormGroup;
  subscription1: Subscription
  subscription2: Subscription

  constructor( private title: Title,
               private _headerService : headerTitleService,
               private _authService : AuthService,
               private fb : FormBuilder ){

    this.title.setTitle("Reset Password") 
  }


  // Get Forms
  get form(){
    return this.OldPassForm;
  }
  get NewPassForm(){
    return this.SetNewPasswordForm;
  }

  ngOnInit(): void {

    //Get the User Data
    this.subscription2 = this._headerService.title.subscribe(val =>{
      this.userData = val;
    });

    this.OldPassForm = this.fb.group({
      'oldPassword' : new FormControl('',[Validators.required])
    });

    this.SetNewPasswordForm = this.fb.group({
      'password' : new FormControl('',[Validators.required]),
      'confirmPassword' : new FormControl('',[Validators.required])
    }, {validators: this.password.bind(this) }
    );

  }

  //Confirm Password Validation
  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    return password === confirmPassword ? { passwordNotMatch: false } : { passwordNotMatch: true };
  }

  //Check Old Password
  CheckOldPassword(formValue:FormGroup){
    if(this.userData['password'] === formValue.get('oldPassword').value){
      return this.isOldPasswordBox = true;
    }
  }

  submitNewPassword(formValue:FormGroup){

    if(formValue.value.password === formValue.value.confirmPassword){
      let userObj = {
        userId : this.userData._id,
        password: formValue.get('confirmPassword').value
      }

      this.subscription1 =  this._authService.ResetPassword(userObj).subscribe(val=>{
        alert(val.message)
        this._authService.logOut();
      },err => {alert(err.errror)})
    }
  }


  ngOnDestroy() {
    if(this.subscription1){
      this.subscription1.unsubscribe();
    }
    this.subscription2.unsubscribe();
  }


}
