import { Injectable } from "@angular/core";
import PocketBase from "pocketbase";
import { environment } from "src/assets/environments/environment";
import { EventModel } from "../shared/models/event.model";
import { CategoryService } from "./category.service";

@Injectable({
  providedIn: "root",
})
export class EventService {
  constructor(
    private categoryService: CategoryService,
  ) {}

  async getEvents(): Promise<EventModel[]> {
    const pb = new PocketBase(environment.apiBaseUrl);
    const events = await pb
      .collection("events")
      .getFullList({ sort: "-created" }) as EventModel[];

    for (const event of events) {
      if (event.category){
        event.categoryData = await this.categoryService.getCategory(event.category);
      }
    }
    return events;
  }
}
