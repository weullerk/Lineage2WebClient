import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { reducers } from './reducers/app';
import { AuthEffects } from './auth/effects/auth';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from './app.translate.factory';
import { environment } from '../environments/environment';

import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './core/containers/app';
import { AccountModule } from './account/account.module';
import { DownloadsModule } from './downloads/downloads.module';
import { DonationModule } from './donations/donation.module';
import { InformationsModule } from './informations/informations.module';
import { CastleSiegeModule } from './castle-siege/castle-siege.module';
import { ContactModule } from './contact/contact.module';
import { UserModule } from './user/user.module';

import { NotFoundComponent } from './core/containers/not-found';
import { RankingsComponent } from './rankings/components/rankings';
import { RankingClansComponent } from './rankings/components/ranking-clans';
import { RankingCharactersComponent } from './rankings/components/ranking-characters';
import { OlympiadsRankingComponent } from './rankings/components/ranking-oympiad';
import { OlympiadsHeroesComponent } from './olympiads/containers/olympiads-heroes.component';
import { OlympiadsComponent } from './olympiads/components/olympiads';
import { HomeComponent } from './core/containers/home';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },

  { path: 'olimpiadas', component: OlympiadsComponent },
  { path: 'rankings/characters', component: RankingCharactersComponent },
  { path: 'rankings/clans', component: RankingClansComponent },
  { path: 'rankings/olimpiadas', component: OlympiadsRankingComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    OlympiadsComponent,
    OlympiadsHeroesComponent,
    OlympiadsRankingComponent,
    RankingsComponent,
    RankingCharactersComponent,
    RankingClansComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgbModule.forRoot(),
    AuthModule,
    CoreModule,
    AccountModule,
    DownloadsModule,
    InformationsModule,
    CastleSiegeModule,
    DonationModule,
    ContactModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
