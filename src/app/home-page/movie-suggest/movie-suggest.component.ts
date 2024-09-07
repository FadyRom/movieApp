import {
  Component,
  computed,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { MovieApiService } from '../../movie-api.service';
import { style, animate, trigger } from '@angular/animations';
import { MOVIE_API_SHAPE } from '../../movies.model';
import { RouterLink } from '@angular/router';
import { SelectedMovieService } from '../../selected-movie.service';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-suggest',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-suggest.component.html',
  styleUrl: './movie-suggest.component.css',
  animations: [
    trigger('fadeInAnimation', [
      style({ opacity: 0 }),
      animate('300ms ease-in-out', style({ opacity: 1 })),
    ]),
  ],
})
export class MovieSuggestComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private movieapiService = inject(MovieApiService);
  private selectedMovieService = inject(SelectedMovieService);

  movieDisplayer = computed(() => this.movieapiService.movieDisplayer());
  randomPoster = signal('');
  private moviesLength = signal(0);

  ngOnInit(): void {
    const getMovies = this.movieapiService.movieFetch().subscribe((res) => {
      this.randomPoster.set(
        'https://image.tmdb.org/t/p/original/' +
          this.movieDisplayer().at(0)!.poster_path
      );
      this.moviesLength.set(res.results.length);
    });

    this.destroyRef.onDestroy(() => getMovies.unsubscribe());

    setInterval(() => {
      this.randomPosterNumber();
    }, 3000);
  }

  randomPosterNumber() {
    const randomNumber = Math.floor(Math.random() * this.moviesLength());

    this.randomPoster.set(
      'https://image.tmdb.org/t/p/original/' +
        this.movieDisplayer().at(randomNumber)!.poster_path
    );
  }

  clickedMovie(movie: MOVIE_API_SHAPE) {
    this.selectedMovieService.selectedMovie = [movie];
    console.log(movie);
  }
}
