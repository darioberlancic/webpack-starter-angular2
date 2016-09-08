import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'events',
  template: `
    <div class="container">
      <h3>{{ title }}</h3>
      <pre>{{ events | json }}</pre>
    </div>
  `
})
export class EventsComponent implements OnInit {
  public events;
  public title;
  public errorMessage: string;

  constructor(private ds: DataService) {}

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.ds.getEvents()
      .subscribe(
        (data) => {
          this.events = data,
          this.title = data.title
        },
        (error) => { this.errorMessage = <any>error }
      )
  }
}
