import { Routes } from "@angular/router";
import { EventService } from "../services/event.service";

export default [
  {
    path: "",
    providers: [EventService],
    children: [
      {
        path: "events",
        loadComponent: () =>
          import("./event/event.component").then((m) => m.EventComponent),
      },
    ],
  }
] as Routes;
