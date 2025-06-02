import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="navbar">
      <div class="nav-container">
        <a routerLink="/" class="nav-logo">Me.Portfolio</a>
        <ul class="nav-menu">
          <li class="nav-item">
            <a
              routerLink="/"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              class="nav-link"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a routerLink="/about" routerLinkActive="active" class="nav-link"
              >About</a
            >
          </li>
          <li class="nav-item">
            <a routerLink="/contact" routerLinkActive="active" class="nav-link"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 Portfolio. All rights reserved.</p>
      </div>
    </footer>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio-app';
}
