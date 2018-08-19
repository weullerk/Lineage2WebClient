import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DownloadsRoutingModule } from './downloads-routing.module';
import { SharedModule } from '../shared/shared.module';

import { DownloadsComponent } from './components/downloads';
import { DownloadsListComponent } from './components/downloads-list';
import { DownloadEditComponent } from './components/download-edit';

import { DownloadsService } from './services/downloads.service';

@NgModule({
  imports: [
    DownloadsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    DownloadsComponent,
    DownloadsListComponent,
    DownloadEditComponent
  ],
  providers: [
    DownloadsService
  ]
})
export class DownloadsModule {}
