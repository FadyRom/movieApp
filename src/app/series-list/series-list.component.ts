import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { SeriesApiService } from '../series-api.service';
import { SEREIES_LIST_RESPONSE } from '../series.model';
import { tap } from 'rxjs';
import { NavbarComponent } from '../navbar/navbar.component';
import { SeriesShapeComponent } from './series-shape/series-shape.component';

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [NavbarComponent, SeriesShapeComponent],
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css',
})
export class SeriesListComponent implements OnInit {
  private seriesApiService = inject(SeriesApiService);
  private destroyRef = inject(DestroyRef);

  popularSeries = signal<SEREIES_LIST_RESPONSE[]>([]);
  actionSeries = signal<SEREIES_LIST_RESPONSE[]>([]);
  adventureSeries = signal<SEREIES_LIST_RESPONSE[]>([]);
  animationSeries = signal<SEREIES_LIST_RESPONSE[]>([]);
  comedySeries = signal<SEREIES_LIST_RESPONSE[]>([]);
  dramaSeries = signal<SEREIES_LIST_RESPONSE[]>([]);
  horrorSeries = signal<SEREIES_LIST_RESPONSE[]>([]);
  mysterySeries = signal<SEREIES_LIST_RESPONSE[]>([]);

  ngOnInit(): void {
    const seriesListUrl =
      'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc';

    const popularSub = this.seriesApiService
      .popularSeries()
      .subscribe((res) => this.popularSeries.set(res.results));

    const actionSub = this.seriesApiService
      .actionSeries()
      .subscribe((res) => this.actionSeries.set(res.results));

    const animationSub = this.seriesApiService
      .animationSeries()
      .subscribe((res) => this.animationSeries.set(res.results));

    const comedySub = this.seriesApiService
      .comedySeries()
      .subscribe((res) => this.comedySeries.set(res.results));

    const dramaSub = this.seriesApiService
      .dramaSeries()
      .subscribe((res) => this.dramaSeries.set(res.results));

    const crimeSub = this.seriesApiService
      .crimeSeries()
      .subscribe((res) => this.horrorSeries.set(res.results));

    const romanceSub = this.seriesApiService
      .mysterySeries()
      .subscribe((res) => this.mysterySeries.set(res.results));

    this.destroyRef.onDestroy(() => {
      popularSub.unsubscribe();
      actionSub.unsubscribe();
      animationSub.unsubscribe();
      comedySub.unsubscribe();
      dramaSub.unsubscribe();
      crimeSub.unsubscribe();
      romanceSub.unsubscribe();
    });
  }
}
