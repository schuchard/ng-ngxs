import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchSummaryComponent } from './launch-summary/launch-summary.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchSummaryComponent
  },
  {
    path: 'rockets',
    loadChildren: 'app/+rocket/rocket.module#RocketModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
