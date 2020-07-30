import {Component, OnInit} from '@angular/core';
import { ValidateAccountService } from '../../services/validate-account.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { ApiResponse, ApiResponseError } from '../../../shared/model/api-response';
import { Message } from '../../../shared/model/message';

@Component({
  selector: 'app-account-recovery-password',
  templateUrl: './recovery-password.html'
})
export class AccountRecoveryPasswordComponent implements OnInit {

  form: FormGroup;
  message: Message | null = null;

  constructor(private validateAccountService: ValidateAccountService,
              private accountService: AccountService) {}

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email],
       this.validateAccountService.validateEmailNotExists.bind(this.validateAccountService))
    });
  }

  onReset() {
    this.form.reset();
  }

  onSubmit() {
    const formData = this.form.value;

    this.accountService.recoveryPassword(formData)
      .subscribe((response: ApiResponse) => {
        this.message = { message: response.message, type: 'success' };
      }, (response: ApiResponseError) => {
        this.message = { message: response.error, type: 'warning' };
      });
  }

  Close(messageClosed: boolean) {
    this.message = null;
  }
}
