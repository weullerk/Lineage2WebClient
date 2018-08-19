import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RankingCharactersComponent } from './components/ranking-characters';
import { RankingClansComponent } from './components/ranking-clans';
import { RankingOlympiadsComponent } from './components/ranking-oympiad';

const rankingRoutes: Routes = [
  { path: 'rankings/characters', component: RankingCharactersComponent },
  { path: 'rankings/clans', component: RankingClansComponent },
  { path: 'rankings/olimpiadas', component: RankingOlympiadsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(rankingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RankingRoutingModule {}
