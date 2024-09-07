import { inject, Injectable } from '@angular/core';
import { MOVIE_API_SHAPE } from './movies.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SelectedMovieService {
  private httpClient = inject(HttpClient);

  selectedMovie?: MOVIE_API_SHAPE[];

  // get request for movie cast
  movieFetch(url: string) {
    return this.httpClient.get(url, {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjM1YmNkNmY1NmE0MTNjZTQxNWM2OGMwZDdlOTFlMiIsIm5iZiI6MTcyNDkyNjU4MC4yOTE2ODQsInN1YiI6IjY2ZDA0OTgzNmVhNDk0MTQzN2EwYmIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sTo2zkyKNGY81DWRIvFwYjhAYveFVRWpWfgOV218_Rc',
      },
    });
  }
  // -----------------
}
