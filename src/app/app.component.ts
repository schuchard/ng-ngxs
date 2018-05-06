import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetAllRockets, GetAllLaunches } from './store/space-state';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GetAllRockets()); // build navbar rocket links from data
    this.store.dispatch(new GetAllLaunches());
  }
}
