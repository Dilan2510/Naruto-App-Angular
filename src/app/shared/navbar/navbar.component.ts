import { Component } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatCommonModule, MatIconModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private router: Router) {}

  public OnNavigateCharacters(): void {
    this.router.navigate(['characters']);
  }
  public OnNavigateHome(): void {
    this.router.navigate(['home']);
  }
  public OnNavigateClans(): void {
    this.router.navigate(['clans']);
  }
}
