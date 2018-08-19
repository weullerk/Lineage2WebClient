import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

import { AppRoutingModule } from './app-routing-module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { AccountModule } from './account/account.module';
import { CastleSiegeModule } from './castle-siege/castle-siege.module';
import { ContactModule } from './contact/contact.module';
import { DonationModule } from './donations/donation.module';
import { DownloadsModule } from './downloads/downloads.module';
import { InformationsModule } from './informations/informations.module';
import { OlympiadsModule } from './olympiads/olympiads.module';
import { RankingsModule } from './rankings/rankings.module';
import { UserModule } from './user/user.module';

import { AppComponent } from './core/containers/app';


@NgModule({
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
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
    UserModule,
    OlympiadsModule,
    RankingsModule,
    AppRoutingModule
  ]
})
export class AppModule { }
