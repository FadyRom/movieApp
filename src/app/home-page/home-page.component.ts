import { Component } from '@angular/core';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MovieSuggestComponent } from './movie-suggest/movie-suggest.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SideNavComponent, MovieSuggestComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
