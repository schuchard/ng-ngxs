import { tap } from 'rxjs/operators';

import { State, Action, StateContext, Selector } from '@ngxs/store';

import { SpaceService } from '../shared/services/space.service';

export class GetAllLaunches {
  static readonly type = '[Space] GetAllLaunches';
}

export class GetAllRockets {
  static readonly type = '[Space] GetAllRockets';
}

export class GetRocketById {
  static readonly type = '[Space] GetRocketById';

  constructor(public payload: number | null) {}
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

  @Selector()
  static allRocketIds(state: SpaceStateModel) {
    return !state.rockets.length
      ? []
      : state.rockets.map((r) => ({ id: r.id, name: r.name }));
  }

  @Action(GetAllLaunches)
  getLaunches({ patchState }: StateContext<SpaceStateModel>) {
    return this.spaceService.getAllLaunches().pipe(
      tap((res) => {
        console.log('GetLaunches server response');

        return patchState({ launches: res });
      }),
    );
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
    if (payload === null) {
      return patchState({ activeRocket: null });
    }

    return this.spaceService
      .getRocketById(payload)
      .pipe(tap((res) => patchState({ activeRocket: res })));
  }
}
