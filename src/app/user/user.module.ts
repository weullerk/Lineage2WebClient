import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user';
import { UserPanelComponent } from './components/panel/panel';
import { UserLoginComponent } from './components/login/login';
import { UserMenuComponent } from './components/menu/menu';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    UserComponent,
    UserPanelComponent,
    UserLoginComponent,
    UserMenuComponent
  ],
  exports: [
    UserPanelComponent
  ]
})
export class UserModule {}
