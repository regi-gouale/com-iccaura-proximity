import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { EventsModel } from '../shared/models/event.model';

@Injectable()
export class EventsService {
  private dbUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.dbUrl = 'http://localhost:8090';
  }

  getAllEvents(): Observable<EventsModel[]> {
    return this.httpClient
      .get<EventsModel[]>(`${this.dbUrl}/api/collections/events/records?sort=-startTime`)
      .pipe(
        tap(events => {
          console.log('EventsService.getAllEvents() $events: ', events[0]);
        }),
        catchError(
          this.handleError<EventsModel[]>(
            'getAllEvents', []
          )
        )
      );
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
