import {Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: '<app-template-default></app-template-default>'
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.setDefaultLang('pt-br');
    // Implement store consume to change dinamic the language.
    this.translate.use('en');
  }
}
