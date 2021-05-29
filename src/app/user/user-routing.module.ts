import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: 'edit-user', component: EditUserComponent },
  { path: 'reset-password', component: ResetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
