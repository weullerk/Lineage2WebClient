import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DownloadsComponent } from './components/downloads';
import { DownloadsListComponent } from './components/downloads-list';
import { DownloadEditComponent } from './components/download-edit';

const downloadsRoutes: Routes = [
  { path: 'downloads', component: DownloadsComponent },
  { path: 'downloads/listar', component: DownloadsListComponent },
  { path: 'downloads/novo', component: DownloadEditComponent },
  { path: 'downloads/editar/:id', component: DownloadEditComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(downloadsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DownloadsRoutingModule {}
