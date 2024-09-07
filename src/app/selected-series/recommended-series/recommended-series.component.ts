import { Component, DestroyRef, inject, input, signal } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { RECOMMENDED_RESULTS } from '../../movies.model';
import { SelectedMovieService } from '../../selected-movie.service';

@Component({
  selector: 'app-recommended-series',
  standalone: true,
  imports: [],
  templateUrl: './recommended-series.component.html',
  styleUrl: './recommended-series.component.css',
})
export class RecommendedSeriesComponent {
  seriesId = input.required();

  private router = inject(Router);
  private selectedMovieService = inject(SelectedMovieService);
  private destroyRef = inject(DestroyRef);

  recommendedSeries = signal<RECOMMENDED_RESULTS[]>([]);

  ngOnInit(): void {
    const urlRecommendations = `https://api.themoviedb.org/3/tv/${this.seriesId()}/recommendations`;
    // recommendations fetching

    const recommendationsSub = this.selectedMovieService
      .movieFetch(urlRecommendations)
      .pipe(
        tap({
          next: (res: any) => {
            const recommendedSeriesResults = res;
            this.recommendedSeries.set(recommendedSeriesResults.results);
          },
          complete: () => {
            console.log('done');
          },
        })
      )
      .subscribe();

    this.destroyRef.onDestroy(() => recommendationsSub.unsubscribe());

    //-------------------------
    // console.log(this.seriesId());
  }

  ngOnChanges(): void {
    const urlRecommendations = `https://api.themoviedb.org/3/movie/${this.seriesId()}/recommendations`;
    // recommendations fetching

    const recommendationsSub = this.selectedMovieService
      .movieFetch(urlRecommendations)
      .pipe(
        tap({
          next: (res: any) => {
            const recommendedSeriesResults = res;
            this.recommendedSeries.set(recommendedSeriesResults.results);
          },
          complete: () => {
            console.log('done');
          },
        })
      )
      .subscribe();

    this.destroyRef.onDestroy(() => recommendationsSub.unsubscribe());

    //-------------------------
    // console.log(this.seriesId());
  }

  reloadPage(id: number) {
    return (
      this.router.navigate(['../../series/', String(id)]),
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    );
  }
}
