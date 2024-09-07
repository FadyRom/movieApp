import {
  Component,
  DestroyRef,
  inject,
  input,
  OnChanges,
  OnInit,
  signal,
} from '@angular/core';
import { SeriesApiService } from '../series-api.service';
import { tap } from 'rxjs';
import { NavbarComponent } from '../navbar/navbar.component';
import { SELECTED_SERIES, CAST, CREW, REVIEWS_RESULTS } from '../series.model';
import { RecommendedSeriesComponent } from './recommended-series/recommended-series.component';

@Component({
  selector: 'app-selected-series',
  standalone: true,
  imports: [NavbarComponent, RecommendedSeriesComponent],
  templateUrl: './selected-series.component.html',
  styleUrl: './selected-series.component.css',
})
export class SelectedSeriesComponent implements OnInit, OnChanges {
  seriesId = input.required();

  seriesApiService = inject(SeriesApiService);
  destroyRef = inject(DestroyRef);

  selectedSeries = signal<SELECTED_SERIES>({
    adult: false,
    backdrop_path: '',
    created_by: [],
    episode_run_time: [],
    first_air_date: '',
    homepage: '',
    id: 0,
    in_production: true,
    languages: ['en'],
    name: '',
    number_of_episodes: 672,
    number_of_seasons: 22,
    original_language: '',
    original_name: '',
    overview: '',
    poster_path: '',
    status: '',
    tagline: '',
    type: '',
    vote_average: 0,
    vote_count: 0,
  });
  crew = signal<CREW[]>([]);
  cast = signal<CAST[]>([]);
  reviews = signal<REVIEWS_RESULTS[]>([]);

  ngOnInit(): void {
    const selectedSeriesUrl = `https://api.themoviedb.org/3/tv/${this.seriesId()}?language=en-US`;
    const crewCastUrl = `https://api.themoviedb.org/3/tv/${this.seriesId()}/credits`;
    const reviewsUrl = `https://api.themoviedb.org/3/tv/${this.seriesId()}/reviews`;

    // selected series fetch
    const seriesSub = this.seriesApiService
      .fetchSeries(selectedSeriesUrl)
      .pipe(
        tap({
          next: (res) => {
            const response: any = res;
            this.selectedSeries.set(response);
            console.log(res);
          },
          complete: () => {
            console.log(this.selectedSeries());
          },
        })
      )
      .subscribe();

    this.destroyRef.onDestroy(() => {
      seriesSub.unsubscribe();
    });
    // --------------------

    // CAST CREW fetch
    const selectedMovieSub = this.seriesApiService
      .fetchSeries(crewCastUrl)
      .subscribe((res) => {
        const crewCastResponse: any = res;
        console.log(crewCastResponse);
        this.crew.set(crewCastResponse.crew);
        this.cast.set(crewCastResponse.cast);
      });

    this.destroyRef.onDestroy(() => selectedMovieSub.unsubscribe());
    // ----------------------

    // reviews fetch
    const reviewSub = this.seriesApiService
      .fetchSeries(reviewsUrl)
      .subscribe((res) => {
        const reviewsRes: any = res;
        this.reviews.set(reviewsRes.results);
      });
    this.destroyRef.onDestroy(() => reviewSub.unsubscribe());

    // ----------------------
  }
  ngOnChanges() {
    const selectedSeriesUrl = `https://api.themoviedb.org/3/tv/${this.seriesId()}?language=en-US`;
    const crewCastUrl = `https://api.themoviedb.org/3/tv/${this.seriesId()}/credits`;
    const reviewsUrl = `https://api.themoviedb.org/3/tv/${this.seriesId()}/reviews`;

    // selected series fetch
    const seriesSub = this.seriesApiService
      .fetchSeries(selectedSeriesUrl)
      .pipe(
        tap({
          next: (res) => {
            const response: any = res;
            this.selectedSeries.set(response);
            console.log(res);
          },
          complete: () => {
            console.log(this.selectedSeries());
          },
        })
      )
      .subscribe();

    this.destroyRef.onDestroy(() => {
      seriesSub.unsubscribe();
    });
    // --------------------

    // CAST CREW fetch
    const selectedMovieSub = this.seriesApiService
      .fetchSeries(crewCastUrl)
      .subscribe((res) => {
        const crewCastResponse: any = res;
        console.log(crewCastResponse);
        this.crew.set(crewCastResponse.crew);
        this.cast.set(crewCastResponse.cast);
      });

    this.destroyRef.onDestroy(() => selectedMovieSub.unsubscribe());
    // ----------------------

    // reviews fetch
    const reviewSub = this.seriesApiService
      .fetchSeries(reviewsUrl)
      .subscribe((res) => {
        const reviewsRes: any = res;
        this.reviews.set(reviewsRes.results);
      });
    this.destroyRef.onDestroy(() => reviewSub.unsubscribe());

    // ----------------------
  }
}
