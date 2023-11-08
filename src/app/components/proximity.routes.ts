import { Routes } from "@angular/router";
import { EventsService } from "../services/events.service";

export default [{
    path: '',
    providers: [EventsService],
    children: [
        { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
        { path: 'events', loadComponent: () => import('./events/events.component').then(m => m.EventsComponent) },
    ]
}] as Routes