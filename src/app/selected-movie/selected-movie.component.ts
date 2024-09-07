import {
  Component,
  DestroyRef,
  inject,
  input,
  OnChanges,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';
import { MovieApiService } from '../movie-api.service';
import { SelectedMovieService } from '../selected-movie.service';
import { CAST, CREW, MOVIE_API_SHAPE, REVIEWS_RESULTS } from '../movies.model';
import { NavbarComponent } from '../navbar/navbar.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-selected-movie',
  standalone: true,
  imports: [NavbarComponent, RecommendationsComponent, RouterLink],
  templateUrl: './selected-movie.component.html',
  styleUrl: './selected-movie.component.css',
})
export class SelectedMovieComponent implements OnInit, OnChanges {
  movieId = input.required();

  private selectedMovieService = inject(SelectedMovieService);
  // private movieapiService = inject(MovieApiService);

  selectedMovie = signal<any>('');
  response: any;
  destroyRef = inject(DestroyRef);
  crewCastResponse!: any;
  crew!: CREW[];
  cast!: CAST[];
  reviews!: any;
  userReviews!: REVIEWS_RESULTS[];

  // selectedMoviePoster = signal('');

  ngOnInit(): void {
    const recommendedMovies = `https://api.themoviedb.org/3/movie/${this.movieId()}/recommendations`;
    const urlReviews = `https://api.themoviedb.org/3/movie/${this.movieId()}/reviews`;
    const movieDetails = `https://api.themoviedb.org/3/movie/${this.movieId()}`;

    // movie details

    const movieDetailsSub = this.selectedMovieService
      .movieFetch(movieDetails)
      .subscribe((res) => {
        this.selectedMovie.set(res);
        console.log(this.selectedMovie(), res);
      });

    this.destroyRef.onDestroy(() => movieDetailsSub.unsubscribe());
    // ---------------

    // recommendations
    const recommendationsSub = this.selectedMovieService
      .movieFetch(recommendedMovies)
      .subscribe();

    this.destroyRef.onDestroy(() => recommendationsSub.unsubscribe());

    // -------------------

    //get fetch movie actors,directors ...etc details

    const selectedMovieSub = this.selectedMovieService
      .movieFetch(recommendedMovies)
      .subscribe((res) => {
        this.crewCastResponse = res;
        this.crew = this.crewCastResponse.crew.filter(
          (direct: CREW) =>
            direct.known_for_department.toLowerCase() === 'directing'
        );
        this.cast = this.crewCastResponse.cast.filter(
          (actor: CAST) => actor.known_for_department.toLowerCase() === 'acting'
        );
      });

    this.destroyRef.onDestroy(() => selectedMovieSub.unsubscribe());
    //--------------------

    //fetching reviews

    const reviewSub = this.selectedMovieService
      .movieFetch(urlReviews)
      .subscribe((res) => {
        this.reviews = res;
        this.userReviews = this.reviews.results;
      });
    this.destroyRef.onDestroy(() => reviewSub.unsubscribe());

    //--------------------
    console.log(this.movieId());
  }

  ngOnChanges(): void {
    const recommendedMovies = `https://api.themoviedb.org/3/movie/${this.movieId()}/recommendations`;
    const urlReviews = `https://api.themoviedb.org/3/movie/${this.movieId()}/reviews`;
    const movieDetails = `https://api.themoviedb.org/3/movie/${this.movieId()}`;
    const credits = `https://api.themoviedb.org/3/movie/${this.movieId()}/credits`;

    // movie details

    const movieDetailsSub = this.selectedMovieService
      .movieFetch(movieDetails)
      .subscribe((res) => {
        this.selectedMovie.set(res);
      });

    this.destroyRef.onDestroy(() => movieDetailsSub.unsubscribe());
    // ---------------

    // recommendations
    const recommendationsSub = this.selectedMovieService
      .movieFetch(recommendedMovies)
      .subscribe();

    this.destroyRef.onDestroy(() => recommendationsSub.unsubscribe());

    // -------------------

    //get fetch movie actors,directors ...etc details

    const selectedMovieSub = this.selectedMovieService
      .movieFetch(credits)
      .subscribe((res) => {
        this.crewCastResponse = res;
        this.crew = this.crewCastResponse.crew.filter(
          (direct: CREW) =>
            direct.known_for_department.toLowerCase() === 'directing'
        );
        this.cast = this.crewCastResponse.cast.filter(
          (actor: CAST) => actor.known_for_department.toLowerCase() === 'acting'
        );
      });

    this.destroyRef.onDestroy(() => selectedMovieSub.unsubscribe());
    //--------------------

    //fetching reviews

    const reviewSub = this.selectedMovieService
      .movieFetch(urlReviews)
      .subscribe((res) => {
        this.reviews = res;
        this.userReviews = this.reviews.results;
      });
    this.destroyRef.onDestroy(() => reviewSub.unsubscribe());

    //--------------------
    console.log(this.movieId());
  }

  get selectedMoviePoster() {
    return (
      'https://image.tmdb.org/t/p/original/' + this.selectedMovie().poster_path
    );
  }
}
