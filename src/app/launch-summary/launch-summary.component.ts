import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { Actions, Select, ofActionSuccessful } from '@ngxs/store';
import { GetAllLaunches } from '../store/space-state';

@Component({
  selector: 'app-launches',
  templateUrl: './launch-summary.component.html',
  styleUrls: ['./launch-summary.component.css'],
})
export class LaunchSummaryComponent implements OnInit, OnDestroy {
  launchSuccess$;

  @Select((state) => state.space.launches)
  launches$: Observable<any>;

  constructor(private actions: Actions) {}

  ngOnInit() {
    this.launchSuccess$ = this.actions
      .pipe(ofActionSuccessful(GetAllLaunches))
      .subscribe(() => console.log('GetLaunches finished'));
  }

  ngOnDestroy() {
    this.launchSuccess$.unsubscribe();
  }
}
