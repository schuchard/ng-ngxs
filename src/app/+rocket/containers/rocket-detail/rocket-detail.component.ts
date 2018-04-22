import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetRocketById } from '../../../store/space-state';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-rocket-detail',
  templateUrl: './rocket-detail.component.html',
  styleUrls: ['./rocket-detail.component.css'],
})
export class RocketDetailComponent implements OnInit {
  @Select((state) => state.space.activeRocket)
  activeRocket$: Observable<{}>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    const rocketId = this.route.snapshot.params.id;
    this.store.dispatch(new GetRocketById(rocketId));
  }
}
