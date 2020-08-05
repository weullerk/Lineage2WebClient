import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ValidateAccountService } from './services/validate-account.service';

import { AccountChangePasswordComponent } from './components/change-password/change-password';
import { AccountCreateComponent } from './components/create/create';
import { AccountRecoveryPasswordComponent } from './components/recovery-password/recovery-password';
import { AccountUpdatePasswordComponent } from './components/update-password/update-password';
import { AccountService } from './services/account.service';
import {UpdatePasswordGuard} from './guards/update-password.guard';
import {Router, RouterState} from '@angular/router';

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
  providers: [ ValidateAccountService, AccountService, UpdatePasswordGuard ]
})
export class AccountModule {}
