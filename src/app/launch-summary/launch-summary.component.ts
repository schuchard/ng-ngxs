import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { Actions, Store, Select, ofActionSuccessful } from '@ngxs/store';
import { GetLaunches } from '../store/space-state';

@Component({
  selector: 'app-launches',
  templateUrl: './launch-summary.component.html',
  styleUrls: ['./launch-summary.component.css'],
})
export class LaunchSummaryComponent implements OnInit, OnDestroy {
  launchSuccess$;

  @Select((state) => state.space.launches)
  launches$: Observable<any>;

  constructor(private store: Store, private actions: Actions) {}

  ngOnInit() {
    this.store.dispatch(new GetLaunches());

    this.launchSuccess$ = this.actions
      .pipe(ofActionSuccessful(GetLaunches))
      .subscribe(() => console.log('GetLaunches finished'));
  }

  ngOnDestroy() {
    this.launchSuccess$.unsubscribe();
  }
}
