import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  
  {path:'login', component:LoginComponent},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'register', component:NewUserComponent},
  {path:'forget-password', component:ForgetComponent},
  {path:'logout', component:LogoutComponent},
  {path:'dashboard', component:DashboardComponent},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class AuthRoutingModule { }
