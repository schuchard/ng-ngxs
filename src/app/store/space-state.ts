import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { SpaceService } from '../shared/services/space.service';

export class GetLaunches {
  static readonly type = '[Space] GetLaunches';
}

export class GetAllRockets {
  static readonly type = '[Space] GetAllLaunches';
}

export class GetRocketById {
  static readonly type = '[Space] GetRocketById';

  constructor(public payload: number) {}
}

export interface SpaceStateModel {
  launches: Array<any>;
  rockets: Array<any>;
  activeRocket: {} | null;
}

@State<SpaceStateModel>({
  name: 'space',
  defaults: {
    launches: [],
    rockets: [],
    activeRocket: null,
  },
})
export class SpaceState {
  constructor(private spaceService: SpaceService) {}

  @Action(GetLaunches)
  getLaunches({ patchState }: StateContext<SpaceStateModel>) {
    return this.spaceService
      .getAllLaunches()
      .pipe(tap((res) => patchState({ launches: res })));
  }

  @Action(GetAllRockets)
  getAllRockets({ patchState }: StateContext<SpaceStateModel>) {
    return this.spaceService
      .getAllRockets()
      .pipe(tap((res) => patchState({ rockets: res })));
  }

  @Action(GetRocketById)
  getRocketById(
    { patchState }: StateContext<SpaceStateModel>,
    { payload }: GetRocketById,
  ) {
    return this.spaceService
      .getRocketById(payload)
      .pipe(tap((res) => patchState({ activeRocket: res })));
  }
}
