import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    NewUserComponent,
    LoginComponent, 
    ForgetComponent, 
    LogoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    FormsModule
  ]
})

export class AuthModule { }
