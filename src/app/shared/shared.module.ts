import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceService } from './services/space.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [SpaceService],
})
export class SharedModule {}
