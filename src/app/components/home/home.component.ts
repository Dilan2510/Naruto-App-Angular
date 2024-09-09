import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';

import {
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCommonModule,
    MatIconModule,
    NgbCarouselModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatSidenavModule
  ],
  providers: [NgbCarouselConfig],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  images = [700, 533, 807, 124].map(
    (n) => `https://picsum.photos/id/${n}/900/500`
  );

  constructor(private router: Router, config: NgbCarouselConfig) {}

  public OnNavigateCharacters(): void {
    this.router.navigate(['characters']);
  }

  public OnNavigateCrunchyroll(){
    this.router.navigateByUrl("https://www.crunchyroll.com/es/series/GYQ4MW246/naruto-shippuden")
  }
}
