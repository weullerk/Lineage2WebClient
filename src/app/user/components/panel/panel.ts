import { Component, OnInit } from '@angular/core';
import * as fromAuth from '../../../auth/reducers/auth';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-panel',
  templateUrl: './panel.html'
})
export class UserPanelComponent implements OnInit {

  loggedIn: boolean;

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {
    // this.loggedIn = true;
    this.store.pipe(
      select(fromAuth.getLoggedIn),
      map(loggedIn => loggedIn)
    ).subscribe((loggedIn) => this.loggedIn = loggedIn);
  }
}
