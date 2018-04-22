import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RocketDetailComponent } from './containers/rocket-detail/rocket-detail.component';
import { RocketSummaryComponent } from './containers/rocket-summary/rocket-summary.component';

const routes: Routes = [
  {
    path: '',
    component: RocketSummaryComponent
  },
  {
    path: ':id',
    component: RocketDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RocketRoutingModule { }
