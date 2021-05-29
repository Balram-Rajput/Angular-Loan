import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAuthGuard } from './auth-guard/user-auth.guard';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [

  { 
    path: '', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  { 
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
    canActivate:[UserAuthGuard]
   },

  { 
    path: 'payments', 
    loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule),
    canActivate:[UserAuthGuard]
  },

  { 
    path: 'invoices', 
    loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule),
    canActivate:[UserAuthGuard]
   },

  { 
    path: 'loans',
    loadChildren: () => import('./loans/loans.module').then(m => m.LoansModule),
    canActivate:[UserAuthGuard] 
  },

  { 
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
    canActivate:[UserAuthGuard] 
  },

  { 
    path: 'loan-types',
    loadChildren: () => import('./loan-types/loan-types.module').then(m => m.LoanTypesModule),
    canActivate:[UserAuthGuard] 
  },

  { 
    path: 'user', 
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canActivate:[UserAuthGuard]
  },
  
  {
    path:'**',
    component:PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
