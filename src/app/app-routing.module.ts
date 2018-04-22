import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchSummaryComponent } from './launch-summary/launch-summary.component';

export const rocketModulePath = 'app/+rocket/rocket.module#RocketModule';

const routes: Routes = [
  {
    path: '',
    component: LaunchSummaryComponent
  },
  {
    path: 'rockets',
    loadChildren: rocketModulePath
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
