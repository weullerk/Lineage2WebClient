import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-live',
  template: `
    <h4>{{ channel | titlecase }}</h4>
    <p>Skype: <b>{{ address }}</b></p>
  `
})
export class ContactLiveComponent implements OnInit {
  @Input() channel: string;
  @Input() address: string;
  constructor() { }

  ngOnInit() {
  }

}
