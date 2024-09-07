import {
  AfterViewInit,
  Component,
  DestroyRef,
  inject,
  input,
  OnChanges,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';
import { SelectedMovieService } from '../../selected-movie.service';
import { RECOMMENDED_RESULTS } from '../../movies.model';
import { Router, RouterLink } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.css',
})
export class RecommendationsComponent implements OnInit {
  movieId = input.required();

  private router = inject(Router);
  private selectedMovieService = inject(SelectedMovieService);
  private destroyRef = inject(DestroyRef);

  recommendedMoviesResults = signal<any>('');
  recommendedMovies = signal<RECOMMENDED_RESULTS[]>([]);

  ngOnInit(): void {
    const urlRecommendations = `https://api.themoviedb.org/3/movie/${this.movieId()}/recommendations`;
    // recommendations fetching

    const recommendationsSub = this.selectedMovieService
      .movieFetch(urlRecommendations)
      .pipe(
        tap({
          next: (res: any) => {
            this.recommendedMoviesResults.set(res);
            this.recommendedMovies.set(this.recommendedMoviesResults().results);
          },
          complete: () => {
            console.log('done');
          },
        })
      )
      .subscribe();

    this.destroyRef.onDestroy(() => recommendationsSub.unsubscribe());

    //-------------------------
    // console.log(this.movieId());
  }

  ngOnChanges(): void {
    const urlRecommendations = `https://api.themoviedb.org/3/movie/${this.movieId()}/recommendations`;
    // recommendations fetching

    const recommendationsSub = this.selectedMovieService
      .movieFetch(urlRecommendations)
      .pipe(
        tap({
          next: (res: any) => {
            this.recommendedMoviesResults.set(res);
            this.recommendedMovies.set(this.recommendedMoviesResults().results);
          },
          complete: () => {
            console.log('done');
          },
        })
      )
      .subscribe();

    this.destroyRef.onDestroy(() => recommendationsSub.unsubscribe());

    //-------------------------
    // console.log(this.movieId());
  }

  reloadPage(id: number) {
    return (
      this.router.navigate(['../../movies/', String(id)]),
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    );
  }
}
