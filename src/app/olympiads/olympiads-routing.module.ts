import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OlympiadsComponent } from './components/olympiads';

const olympiadsRoutes: Routes = [
  { path: 'olimpiadas', component: OlympiadsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(olympiadsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OlympiadsRoutingModule {}
