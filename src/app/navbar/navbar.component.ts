import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SpaceState } from '../store/space-state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Select(SpaceState.allRocketIds) rocketIds$: Observable<[string]>;

  constructor() { }

  mobileNavClick(input: HTMLInputElement) {
    input.checked = false;
  }
}
