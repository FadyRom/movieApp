import { Component, input } from '@angular/core';
import { MOVIE_API_SHAPE } from '../../movies.model';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
})
export class MoviesListComponent {
  // h2Title = input.required();
  renderedMovies = input.required<MOVIE_API_SHAPE[]>();
}
