import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DonationsComponent } from './components/donations';

const donationRoutes: Routes = [
  { path: 'doacoes', component: DonationsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(donationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DonationRoutingModule {}
