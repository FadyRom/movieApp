import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SideNavComponent } from './home-page/side-nav/side-nav.component';
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { SelectedSeriesComponent } from './selected-series/selected-series.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'movies/:movieId',
    component: SelectedMovieComponent,
  },
  {
    path: 'series',
    component: SeriesListComponent,
  },
  {
    path: 'series/:seriesId',
    component: SelectedSeriesComponent,
  },
  {
    path: 'search/:searchResultShows',
    component: SearchComponent,
  },
  {
    path: '**',
    component: SideNavComponent,
  },
];
