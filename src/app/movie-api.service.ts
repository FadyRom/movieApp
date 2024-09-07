import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal, signal } from '@angular/core';
import { MOVIE_API_SHAPE } from './movies.model';
import { map, catchError, throwError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  private httpClient = inject(HttpClient);

  private movieApiResponse = signal<MOVIE_API_SHAPE[]>([]);
  movieDisplayer = this.movieApiResponse.asReadonly();

  private popularUrl = 'https://api.themoviedb.org/3/movie/popular';
  private actionMoviesUrl =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28';
  private adventureMoviesUrl =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=12';
  private animationMoviesUrl =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16';
  private comedyMoviesUrl =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35';
  private dramaMoviesUrl =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=18';
  private hororMoviesUrl =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27';
  private romanceMoviesUrl =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10749';

  movieFetch() {
    return this.httpClient
      .get(
        'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
        {
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjM1YmNkNmY1NmE0MTNjZTQxNWM2OGMwZDdlOTFlMiIsIm5iZiI6MTcyNDkyNjU4MC4yOTE2ODQsInN1YiI6IjY2ZDA0OTgzNmVhNDk0MTQzN2EwYmIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sTo2zkyKNGY81DWRIvFwYjhAYveFVRWpWfgOV218_Rc',
          },
        }
      )
      .pipe(
        tap({
          next: (response: any) => {
            this.movieApiResponse.set(response.results);
          },
        })
      );
  }

  popularMovies() {
    return this.httpClient
      .get(this.popularUrl, {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjM1YmNkNmY1NmE0MTNjZTQxNWM2OGMwZDdlOTFlMiIsIm5iZiI6MTcyNDkyNjU4MC4yOTE2ODQsInN1YiI6IjY2ZDA0OTgzNmVhNDk0MTQzN2EwYmIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sTo2zkyKNGY81DWRIvFwYjhAYveFVRWpWfgOV218_Rc',
        },
      })
      .pipe(
        tap({
          next: (response: any) => {
            console.log(response);
          },
        })
      );
  }
  actionMovies() {
    return this.httpClient
      .get(this.actionMoviesUrl, {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjM1YmNkNmY1NmE0MTNjZTQxNWM2OGMwZDdlOTFlMiIsIm5iZiI6MTcyNDkyNjU4MC4yOTE2ODQsInN1YiI6IjY2ZDA0OTgzNmVhNDk0MTQzN2EwYmIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sTo2zkyKNGY81DWRIvFwYjhAYveFVRWpWfgOV218_Rc',
        },
      })
      .pipe(
        tap({
          next: (response: any) => {
            console.log(response);
          },
        })
      );
  }
  adventureMovies() {
    return this.httpClient
      .get(this.adventureMoviesUrl, {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjM1YmNkNmY1NmE0MTNjZTQxNWM2OGMwZDdlOTFlMiIsIm5iZiI6MTcyNDkyNjU4MC4yOTE2ODQsInN1YiI6IjY2ZDA0OTgzNmVhNDk0MTQzN2EwYmIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sTo2zkyKNGY81DWRIvFwYjhAYveFVRWpWfgOV218_Rc',
        },
      })
      .pipe(
        tap({
          next: (response: any) => {
            console.log(response);
          },
        })
      );
  }
  animationMovies() {
    return this.httpClient
      .get(this.animationMoviesUrl, {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjM1YmNkNmY1NmE0MTNjZTQxNWM2OGMwZDdlOTFlMiIsIm5iZiI6MTcyNDkyNjU4MC4yOTE2ODQsInN1YiI6IjY2ZDA0OTgzNmVhNDk0MTQzN2EwYmIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sTo2zkyKNGY81DWRIvFwYjhAYveFVRWpWfgOV218_Rc',
        },
      })
      .pipe(
        tap({
          next: (response: any) => {
            console.log(response);
          },
        })
      );
  }
  comedyMovies() {
    return this.httpClient
      .get(this.comedyMoviesUrl, {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjM1YmNkNmY1NmE0MTNjZTQxNWM2OGMwZDdlOTFlMiIsIm5iZiI6MTcyNDkyNjU4MC4yOTE2ODQsInN1YiI6IjY2ZDA0OTgzNmVhNDk0MTQzN2EwYmIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sTo2zkyKNGY81DWRIvFwYjhAYveFVRWpWfgOV218_Rc',
        },
      })
      .pipe(
        tap({
          next: (response: any) => {
            console.log(response);
          },
        })
      );
  }
  dramaMovies() {
    return this.httpClient
      .get(this.dramaMoviesUrl, {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjM1YmNkNmY1NmE0MTNjZTQxNWM2OGMwZDdlOTFlMiIsIm5iZiI6MTcyNDkyNjU4MC4yOTE2ODQsInN1YiI6IjY2ZDA0OTgzNmVhNDk0MTQzN2EwYmIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sTo2zkyKNGY81DWRIvFwYjhAYveFVRWpWfgOV218_Rc',
        },
      })
      .pipe(
        tap({
          next: (response: any) => {
            console.log(response);
          },
        })
      );
  }
  horrorMovies() {
    return this.httpClient
      .get(this.hororMoviesUrl, {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjM1YmNkNmY1NmE0MTNjZTQxNWM2OGMwZDdlOTFlMiIsIm5iZiI6MTcyNDkyNjU4MC4yOTE2ODQsInN1YiI6IjY2ZDA0OTgzNmVhNDk0MTQzN2EwYmIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sTo2zkyKNGY81DWRIvFwYjhAYveFVRWpWfgOV218_Rc',
        },
      })
      .pipe(
        tap({
          next: (response: any) => {
            console.log(response);
          },
        })
      );
  }
  romanceMovies() {
    return this.httpClient
      .get(this.romanceMoviesUrl, {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjM1YmNkNmY1NmE0MTNjZTQxNWM2OGMwZDdlOTFlMiIsIm5iZiI6MTcyNDkyNjU4MC4yOTE2ODQsInN1YiI6IjY2ZDA0OTgzNmVhNDk0MTQzN2EwYmIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sTo2zkyKNGY81DWRIvFwYjhAYveFVRWpWfgOV218_Rc',
        },
      })
      .pipe(
        tap({
          next: (response: any) => {
            console.log(response);
          },
        })
      );
  }
}
