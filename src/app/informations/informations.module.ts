import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {InformationsComponent} from './components/informations';
import {InformationsListComponent} from './components/informations-list';
import {InformationEditComponent} from './components/information-edit';

const InformationsRoutes: Routes = [
  { path: 'info/:type', component: InformationsComponent },
  { path: 'informacoes/listar', component: InformationsListComponent },
  { path: 'informacoes/editar/:id', component: InformationEditComponent },
  { path: 'informacoes/novo', component: InformationEditComponent }
];

@NgModule({
  declarations: [
    InformationsComponent,
    InformationsListComponent,
    InformationEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(InformationsRoutes)
  ]
})
export class InformationsModule {}
