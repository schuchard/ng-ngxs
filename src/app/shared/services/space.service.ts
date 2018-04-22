import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SpaceService {
  BASE = 'https://api.spacexdata.com/v2';

  constructor(private http: HttpClient) {}

  getAllLaunches() {
    return this.http.get<any>(`${this.BASE}/launches`);
  }

  getAllRockets() {
    return this.http.get<any>(`${this.BASE}/rockets`);
  }

  getRocketById(id: number) {
    return this.http.get<any>(`${this.BASE}/rockets/${id}`);
  }
}
