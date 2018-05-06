import { Component, OnInit } from '@angular/core';

import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './rocket-summary.component.html',
  styleUrls: ['./rocket-summary.component.css'],
})
export class RocketSummaryComponent implements OnInit {
  @Select(state => state.space.rockets) rockets$: Observable<any>;

  constructor() {}

  ngOnInit() {
  }
}
