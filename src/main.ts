import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', loadComponent: () => import('./app/pages/not-found/not-found.component').then(m => m.NotFoundComponent) }

];

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
