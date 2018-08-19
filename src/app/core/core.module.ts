import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TemplatesModule } from '../templates/templates.module';

import { AppComponent } from './containers/app';
import { HomeComponent } from './containers/home';
import { NotFoundComponent } from './containers/not-found';
import { ForbiddenComponent } from './containers/forbidden';

export const COMPONENTS = [
  AppComponent,
  HomeComponent,
  NotFoundComponent,
  ForbiddenComponent
];

@NgModule({
  imports: [
    SharedModule,
    TemplatesModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule { }
