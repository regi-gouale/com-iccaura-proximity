import { bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter } from '@angular/router';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./app/components/proximity.routes').then(m => m.default) },
  { path: '**', loadComponent: () => import('./app/components/core/not-found/not-found.component').then(m => m.NotFoundComponent) }

];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(
    ),
    provideRouter(routes)
  ]
})
  .catch((err) => console.error(err));
