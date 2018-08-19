import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../auth/guards/auth';

const userRoutes: Routes = [
  { path: 'usuario', component: UserComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard]
})
export class UserRoutingModule {}
