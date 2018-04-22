import { Component, OnInit } from '@angular/core';

import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs/Observable';
import { SpaceState, GetAllRockets } from '../../../store/space-state';

@Component({
  selector: 'app-rocket-summary',
  templateUrl: './rocket-summary.component.html',
  styleUrls: ['./rocket-summary.component.css'],
})
export class RocketSummaryComponent implements OnInit {
  @Select(SpaceState) space$: Observable<any>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetAllRockets());
  }
}