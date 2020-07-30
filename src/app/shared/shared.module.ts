import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ValidatePipe } from './pipes/validate.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageComponent } from './components/message';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

export const PIPES = [
  ValidatePipe
];

export const COMPONENTS = [
  MessageComponent
];

export const MODULES = [
  CommonModule,
  RouterModule,
  NgbModule,
  TranslateModule
];

@NgModule({
  declarations: [
    ...PIPES,
    ...COMPONENTS
  ],
  exports: [
    ...MODULES,
    ...PIPES,
    ...COMPONENTS
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {}
