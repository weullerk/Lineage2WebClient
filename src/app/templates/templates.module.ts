import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';
import { TemplateDefaultComponent } from './default/containers/default';

@NgModule({
  imports: [
    SharedModule,
    UserModule
  ],
  declarations: [
    TemplateDefaultComponent
  ],
  exports: [
    TemplateDefaultComponent
  ]
})
export class TemplatesModule {}
