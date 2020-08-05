import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { UserLoginComponent } from '../user/components/login/login';

import { AuthService } from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './guards/auth';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
