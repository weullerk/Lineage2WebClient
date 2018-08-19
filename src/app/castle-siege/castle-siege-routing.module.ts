import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CastleSiegeComponent } from './components/castle-siege';


const castleSiegeRoutes: Routes = [
  { path: 'castle-siege', component: CastleSiegeComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(castleSiegeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CastleSiegeRoutingModule {}
