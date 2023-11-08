import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <div class="container">
        <a href="#" routerLink="/" class="logo">
          <img src="assets/images/logoicc.png" alt="logo" class="logo-image"/>
          <span>Proximity </span>
        </a>
        <nav>
          <ul>
            <li><a href="#" routerLink="/home">Accueil</a></li>
            <li><a href="#" routerLink="/events">Evènements</a></li>
            <li><a href="#" routerLink="/appointments">Rendez-vous</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

}
