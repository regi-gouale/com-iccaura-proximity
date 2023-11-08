import { Routes } from "@angular/router";
import { EventsService } from "../services/proximity/events.service";

export default [{
    path: '',
    providers: [EventsService],
    children: [
        { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
    ]
}] as Routes