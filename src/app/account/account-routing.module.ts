import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountChangePasswordComponent } from './components/account-change-password';
import { AccountConfirmComponent } from './components/account-confirm';
import { AccountConfirmSuccessComponent } from './components/account-confirm-success';
import { AccountCreateComponent } from './components/account-create';
import { AccountRecoveryPasswordComponent } from './components/account-recovery-password';
import { AccountUpdatePasswordComponent } from './components/account-update-password';

const accountRoutes: Routes = [
  { path: 'trocar-senha', component: AccountChangePasswordComponent },
  { path: 'confirmar', component: AccountConfirmComponent },
  { path: 'confirmado', component: AccountConfirmSuccessComponent },
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
