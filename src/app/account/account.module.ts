import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ValidateAccountService } from './services/validate-account.service';

import { AccountChangePasswordComponent } from './components/change-password/account-change-password';
import { AccountCreateComponent } from './components/create/create';
import { AccountRecoveryPasswordComponent } from './components/recovery-password/recovery-password';
import { AccountUpdatePasswordComponent } from './components/update-password/account-update-password';
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
    AccountCreateComponent,
    AccountRecoveryPasswordComponent,
    AccountUpdatePasswordComponent
  ],
  providers: [ ValidateAccountService, AccountService ]
})
export class AccountModule {}
