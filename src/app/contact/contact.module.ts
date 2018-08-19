import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ContactComponent } from './components/contact.component';
import { ContactLiveComponent } from './containers/contact-live.component';
import { ContactFormComponent } from './containers/contact-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactRoutingModule,
    SharedModule
  ],
  declarations: [ ContactComponent, ContactLiveComponent, ContactFormComponent ]
})
export class ContactModule { }
