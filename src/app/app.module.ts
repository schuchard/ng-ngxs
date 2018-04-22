import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { SpaceState } from './store/space-state';
import { AppRoutingModule } from './app-routing.module';
import { LaunchSummaryComponent } from './launch-summary/launch-summary.component';

@NgModule({
  declarations: [AppComponent, LaunchSummaryComponent],
  imports: [BrowserModule, AppRoutingModule, NgxsModule.forRoot([SpaceState]), SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
