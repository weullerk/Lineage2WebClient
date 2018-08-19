import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AppComponent } from './containers/app';
import { NotFoundComponent } from './containers/not-found';

import { TemplateDefaultComponent } from './templates/default/components/template-default';
import { UserModule } from '../user/user.module';

export const COMPONENTS = [
  AppComponent,
  NotFoundComponent,
  TemplateDefaultComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule { }
