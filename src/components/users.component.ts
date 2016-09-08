import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'users',
  template: `
    <div class="container">
      <h3>{{ title }}</h3>
      <pre>{{ users | json }}</pre>
    </div>
  `
})
export class UsersComponent implements OnInit {
  public users;
  public title;
  public errorMessage: string;

  constructor(private ds: DataService) {}

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.ds.getMembers()
      .subscribe(
        (data) => {
          this.users = data,
          this.title = data.title
        },
        (error) => { this.errorMessage = error },
        () => {}
      );
  }
}
