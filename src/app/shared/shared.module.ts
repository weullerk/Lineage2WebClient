import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ValidatePipe } from './pipes/validate.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const PIPES = [
  ValidatePipe
];

export const MODULES = [
  CommonModule,
  RouterModule,
  NgbModule,
  TranslateModule
];

@NgModule({
  declarations: [
    ...PIPES
  ],
  exports: [
    ...MODULES,
    ...PIPES,
  ]
})
export class SharedModule {}
