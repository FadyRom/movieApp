import {
  Component,
  DestroyRef,
  inject,
  input,
  OnChanges,
  OnInit,
  signal,
} from '@angular/core';
import { SearchService } from '../search.service';
import { SEARCH_RESULTS } from '../series.model';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit, OnChanges {
  searchResultShows = input.required<string>();

  private searchService = inject(SearchService);
  private destroyRef = inject(DestroyRef);
  private router = inject(Router);

  searchShowsResults = signal<SEARCH_RESULTS[]>([]);

  ngOnInit() {
    const searchSub = this.searchService
      .searchResults(this.searchResultShows())
      .subscribe((res) => {
        const response: any = res;
        this.searchShowsResults.set(response.results);
        console.log(this.searchShowsResults());
      });

    this.destroyRef.onDestroy(() => searchSub.unsubscribe());
  }
  ngOnChanges() {
    const searchSub = this.searchService
      .searchResults(this.searchResultShows())
      .subscribe((res) => {
        const response: any = res;
        this.searchShowsResults.set(response.results);
        console.log(this.searchShowsResults());
      });

    this.destroyRef.onDestroy(() => searchSub.unsubscribe());
  }

  searchClicked(mediaType: string, id: number) {
    if (mediaType == 'movie') {
      this.router.navigate(['movies/', id]);
    } else {
      this.router.navigate(['series/', id]);
    }
  }
}
