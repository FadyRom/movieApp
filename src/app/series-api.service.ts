import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeriesApiService {
  private httpClient = inject(HttpClient);

  private popularUrl =
    'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
  private actionSeriesUrl =
    'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10759';
  private adventureSeriesUrl =
    'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=12';
  private animationSeriesUrl =
    'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16';
  private comedySeriesUrl =
    'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35';
  private dramaSeriesUrl =
    'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=18';
  private crimeSeriesUrl =
    'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=80';
  private mysterySeriesUrl =
    'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=9648';

  fetchSeries(url: string) {
    return this.httpClient.get(url, {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjM1YmNkNmY1NmE0MTNjZTQxNWM2OGMwZDdlOTFlMiIsIm5iZiI6MTcyNDkyNjU4MC4yOTE2ODQsInN1YiI6IjY2ZDA0OTgzNmVhNDk0MTQzN2EwYmIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sTo2zkyKNGY81DWRIvFwYjhAYveFVRWpWfgOV218_Rc',
      },
    });
  }
  popularSeries() {
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
  actionSeries() {
    return this.httpClient
      .get(this.actionSeriesUrl, {
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

  animationSeries() {
    return this.httpClient
      .get(this.animationSeriesUrl, {
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
  comedySeries() {
    return this.httpClient
      .get(this.comedySeriesUrl, {
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
  dramaSeries() {
    return this.httpClient
      .get(this.dramaSeriesUrl, {
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
  crimeSeries() {
    return this.httpClient
      .get(this.crimeSeriesUrl, {
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
  mysterySeries() {
    return this.httpClient
      .get(this.mysterySeriesUrl, {
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
