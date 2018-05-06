import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Select, Store } from '@ngxs/store';

import { GetRocketById } from '../../../store/space-state';

@Component({
  templateUrl: './rocket-detail.component.html',
  styleUrls: ['./rocket-detail.component.css'],
})
export class RocketDetailComponent implements OnInit, OnDestroy {
  routeSub: Subscription;

  @Select((state) => state.space.activeRocket)
  activeRocket$: Observable<{}>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe((route: Params) => {
      this.store.dispatch(new GetRocketById(route.params.id));
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.store.dispatch(new GetRocketById(null));
  }
}
