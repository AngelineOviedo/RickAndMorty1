import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Episode} from '@shared/interfaces/episode.interface'

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { }

  getDetails (id:number) {
    return this.http.get<Episode>(`${environment.episodeUrlAPI}/${id}`);
  }
}
