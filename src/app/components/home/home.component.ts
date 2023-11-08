import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/components/core/header/header.component';
import { EventModel, EventsModel } from 'src/app/shared/models/event.model';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  eventsFromDb!: EventsModel[];

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit(): void {
    this.eventsService.getAllEvents().subscribe(
      (events) =>
        this.eventsFromDb = events);
    console.log('HomeComponent.ngOnInit() $eventsFromDb: ', this.eventsFromDb);
  }
}
