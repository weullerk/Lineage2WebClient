import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `    
    <h3>Contato</h3>
    <hr />
    <p>Entre em contato através dos nosso canais de comunicação para solicitar suporte ou alguma informação sobre o servidor.</p>
  
    <app-contact-live [channel]="'skype'" [address]="'weuller.costa'"></app-contact-live>
  
    <app-contact-form></app-contact-form>
  `
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
