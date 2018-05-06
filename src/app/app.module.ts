import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { SpaceState } from './store/space-state';
import { AppRoutingModule } from './app-routing.module';
import { LaunchSummaryComponent } from './launch-summary/launch-summary.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, LaunchSummaryComponent, NavbarComponent],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([SpaceState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
