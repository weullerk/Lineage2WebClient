import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountChangePasswordComponent } from './components/change-password/account-change-password';
import { AccountCreateComponent } from './components/create/create';
import { AccountRecoveryPasswordComponent } from './components/recovery-password/recovery-password';
import { AccountUpdatePasswordComponent } from './components/update-password/account-update-password';
import {UpdatePasswordGuard} from './guards/update-password.guard';

const accountRoutes: Routes = [
  { path: 'trocar-senha', component: AccountChangePasswordComponent },
  { path: 'cadastrar', component: AccountCreateComponent },
  { path: 'recuperar-senha', component: AccountRecoveryPasswordComponent },
  { path: 'atualizar-senha', component: AccountUpdatePasswordComponent, canActivate: [UpdatePasswordGuard] },
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
