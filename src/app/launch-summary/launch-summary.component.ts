import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetLaunches } from '../store/space-state';

@Component({
  selector: 'app-launches',
  templateUrl: './launch-summary.component.html',
  styleUrls: ['./launch-summary.component.css']
})
export class LaunchSummaryComponent implements OnInit {
  @Select(state => state.space.launches) launches$: Observable<any>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GetLaunches());
  }
}
