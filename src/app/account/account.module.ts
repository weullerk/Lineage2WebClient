import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ValidateAccountService } from './services/validate-account.service';

import { AccountChangePasswordComponent } from './components/account-change-password';
import { AccountConfirmComponent } from './components/account-confirm';
import { AccountConfirmSuccessComponent } from './components/account-confirm-success';
import { AccountCreateComponent } from './components/create/create';
import { AccountRecoveryPasswordComponent } from './components/account-recovery-password';
import { AccountUpdatePasswordComponent } from './components/account-update-password';
import { AccountService } from './services/account.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountRoutingModule,
    SharedModule
  ],
  declarations: [
    AccountChangePasswordComponent,
    AccountConfirmComponent,
    AccountConfirmSuccessComponent,
    AccountCreateComponent,
    AccountRecoveryPasswordComponent,
    AccountUpdatePasswordComponent
  ],
  providers: [ ValidateAccountService, AccountService ]
})
export class AccountModule {}
