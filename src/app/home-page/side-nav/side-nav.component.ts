import { Component, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule, RouterLink, FormsModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css',
})
export class SideNavComponent {
  router = inject(Router);

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
