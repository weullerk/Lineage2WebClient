import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingRoutingModule } from './ranking-routing.module';
import { RankingsComponent } from './components/rankings';
import { RankingOlympiadsComponent } from './components/ranking-oympiad';
import { RankingClansComponent } from './components/ranking-clans';
import { RankingCharactersComponent } from './components/ranking-characters';

@NgModule({
  imports: [
    CommonModule,
    RankingRoutingModule
  ],
  declarations: [
    RankingsComponent,
    RankingCharactersComponent,
    RankingClansComponent,
    RankingOlympiadsComponent,
  ]
})
export class RankingsModule { }
