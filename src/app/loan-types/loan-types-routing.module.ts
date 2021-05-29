import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanTypesComponent } from './loan-types.component';

const routes: Routes = [{ path: '', component: LoanTypesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanTypesRoutingModule { }
