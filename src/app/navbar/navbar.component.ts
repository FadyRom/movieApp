import { Component, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MovieApiService } from '../movie-api.service';
import { SelectedMovieService } from '../selected-movie.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private searchService = inject(SearchService);
  private router = inject(Router);

  showVertical = signal(false);
  searchFieldValue = model('');

  showVerticalList() {
    this.showVertical.set(!this.showVertical());
  }

  bind() {
    this.router.navigate(['search/', this.searchFieldValue()]);
    this.searchFieldValue.set('');
  }
}
