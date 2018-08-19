import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlympiadsRoutingModule } from './olympiads-routing.module';

import { OlympiadsComponent } from './components/olympiads';
import { OlympiadsHeroesComponent } from './containers/olympiads-heroes.component';

@NgModule({
  imports: [
    CommonModule,
    OlympiadsRoutingModule
  ],
  declarations: [
    OlympiadsComponent,
    OlympiadsHeroesComponent
  ]
})
export class OlympiadsModule { }
