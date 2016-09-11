import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'users',
  template: `
    <div class="container">
      <h3>{{ title }}</h3>
      <pre>{{ data | json }}</pre>
    </div>
  `
})
export class UsersComponent implements OnInit {
  public data;
  public title;
  public errorMessage: string;

  constructor(private ds: DataService) {}

  ngOnInit() {
    let endpoint = this.ds.getCurrentEndpoint();

    this.ds.getData(endpoint)
      .subscribe(
        (data) => {
          this.data = data;
          this.title = data.title;
        },
        (error) => {
          this.errorMessage = error
        }
      );
  }
}
