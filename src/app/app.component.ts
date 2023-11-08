import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
    styles: [],
    imports: [CommonModule, RouterOutlet, HeaderComponent]
})
export class AppComponent {
  title = 'com-iccaura-proximity';
}
