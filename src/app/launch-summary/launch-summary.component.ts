import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs/Observable';
import { GetLaunches, SpaceState } from '../store/space-state';
import { Router,  } from '@angular/router';

@Component({
  selector: 'app-launches',
  templateUrl: './launch-summary.component.html',
  styleUrls: ['./launch-summary.component.css']
})
export class LaunchSummaryComponent implements OnInit {
  @Select(SpaceState) space$: Observable<any>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(new GetLaunches());
  }

  viewRocket(rocket) {
    if (rocket) {
      this.router.navigate(['/rockets', rocket]);
    }
  }
}
