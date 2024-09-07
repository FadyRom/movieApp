import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MovieApiService } from '../movie-api.service';
import { MOVIE_API_SHAPE } from '../movies.model';
import { RouterLink } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NavbarComponent, RouterLink, MoviesListComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  private movieApiService = inject(MovieApiService);
  private destroyRef = inject(DestroyRef);

  popularMovies = signal<MOVIE_API_SHAPE[]>([]);
  actionMovies = signal<MOVIE_API_SHAPE[]>([]);
  adventureMovies = signal<MOVIE_API_SHAPE[]>([]);
  animationMovies = signal<MOVIE_API_SHAPE[]>([]);
  comedyMovies = signal<MOVIE_API_SHAPE[]>([]);
  dramaMovies = signal<MOVIE_API_SHAPE[]>([]);
  horrorMovies = signal<MOVIE_API_SHAPE[]>([]);
  romanceMovies = signal<MOVIE_API_SHAPE[]>([]);

  ngOnInit(): void {
    const popularSub = this.movieApiService
      .popularMovies()
      .subscribe((res) => this.popularMovies.set(res.results));

    const actionSub = this.movieApiService
      .actionMovies()
      .subscribe((res) => this.actionMovies.set(res.results));

    const adventureSub = this.movieApiService
      .adventureMovies()
      .subscribe((res) => this.adventureMovies.set(res.results));

    const animationSub = this.movieApiService
      .animationMovies()
      .subscribe((res) => this.animationMovies.set(res.results));

    const comedySub = this.movieApiService
      .comedyMovies()
      .subscribe((res) => this.comedyMovies.set(res.results));

    const dramaSub = this.movieApiService
      .dramaMovies()
      .subscribe((res) => this.dramaMovies.set(res.results));

    const horrorSub = this.movieApiService
      .horrorMovies()
      .subscribe((res) => this.horrorMovies.set(res.results));

    const romanceSub = this.movieApiService
      .romanceMovies()
      .subscribe((res) => this.romanceMovies.set(res.results));

    this.destroyRef.onDestroy(() => {
      popularSub.unsubscribe();
      actionSub.unsubscribe();
      adventureSub.unsubscribe();
      animationSub.unsubscribe();
      comedySub.unsubscribe();
      dramaSub.unsubscribe();
      horrorSub.unsubscribe();
      romanceSub.unsubscribe();
    });
  }
}
