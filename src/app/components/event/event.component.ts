import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EventService } from "src/app/services/event.service";

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
  <!-- {{events | json}} -->
    <h1>Evènements</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Lieux</th>
          <th>Theme</th>
          <th>Catégorie</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let event of events">
          <td>{{ event.description }}</td>
          <td>{{ event.location }}</td>
          <td>{{ event.theme }}</td>
          <td>{{ event.categoryData?.name }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [],
})
export class EventComponent implements OnInit {
  events!: any;
  constructor(private eventService: EventService) {}

  private async loadEvents() {
    try {
      this.events = await this.eventService.getEvents();
      // console.log(this.events);
    } catch (error) {
      console.log(error);
    }
  }
  ngOnInit() {
    this.loadEvents();
  }
}
