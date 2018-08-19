import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastleSiegeRoutingModule } from './castle-siege-routing.module';

import { CastleSiegeComponent } from './components/castle-siege';

@NgModule({
  imports: [
    CommonModule,
    CastleSiegeRoutingModule
  ],
  declarations: [ CastleSiegeComponent ]
})
export class CastleSiegeModule { }
