import { Component, input } from '@angular/core';
import { SEREIES_LIST_RESPONSE } from '../../series.model';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-series-shape',
  standalone: true,
  imports: [DecimalPipe, RouterLink],
  templateUrl: './series-shape.component.html',
  styleUrl: './series-shape.component.css',
})
export class SeriesShapeComponent {
  renderedSeries = input.required<SEREIES_LIST_RESPONSE[]>();
}
