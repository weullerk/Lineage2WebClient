import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountChangePasswordComponent } from './components/change-password/change-password';
import { AccountCreateComponent } from './components/create/create';
import { AccountRecoveryPasswordComponent } from './components/recovery-password/recovery-password';
import { AccountUpdatePasswordComponent } from './components/update-password/update-password';
import { AuthGuard } from '../auth/guards/auth';

const accountRoutes: Routes = [
  { path: 'trocar-senha', component: AccountChangePasswordComponent, canActivate: [ AuthGuard ] },
  { path: 'cadastrar', component: AccountCreateComponent },
  { path: 'recuperar-senha', component: AccountRecoveryPasswordComponent },
  { path: 'atualizar-senha', component: AccountUpdatePasswordComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(accountRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AccountRoutingModule {}
