import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RocketRoutingModule } from './rocket-routing.module';
import { RocketDetailComponent } from './containers/rocket-detail/rocket-detail.component';
import { RocketSummaryComponent } from './containers/rocket-summary/rocket-summary.component';

@NgModule({
  imports: [
    CommonModule,
    RocketRoutingModule
  ],
  declarations: [RocketDetailComponent, RocketSummaryComponent],
})
export class RocketModule { }
