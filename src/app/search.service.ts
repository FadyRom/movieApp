import { inject, Injectable, signal } from '@angular/core';
import { SelectedMovieService } from './selected-movie.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private selectedMovieService = inject(SelectedMovieService);

  searchResults(searchValue: string) {
    return this.selectedMovieService
      .movieFetch(
        `https://api.themoviedb.org/3/search/multi?query=${searchValue}&include_adult=true&language=en-US&page=1`
      )
      .pipe(
        tap({
          next: (res) => console.log(res),
        })
      );
  }
}
