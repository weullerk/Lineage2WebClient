import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AccountService } from './services/account.service';

import { AccountChangePasswordComponent } from './components/account-change-password';
import { AccountConfirmComponent } from './components/account-confirm';
import { AccountConfirmSuccessComponent } from './components/account-confirm-success';
import { AccountCreateComponent } from './components/account-create';
import { AccountRecoveryPasswordComponent } from './components/account-recovery-password';
import { AccountUpdatePasswordComponent } from './components/account-update-password';

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
  providers: [ AccountService ]
})
export class AccountModule {}
