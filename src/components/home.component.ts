import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'home',
  template: `
    <div class="container">
      <div [innerHTML]="data"></div>
    </div>
  `
})
export class HomeComponent implements OnInit {
  public data;
  public errorMessage: string;

  constructor(
    private ds: DataService
  ) {}

  ngOnInit() {
    let endpoint = this.ds.getCurrentEndpoint();

    this.ds.getData(endpoint)
      .subscribe(
        (data) => {
          this.data = data.text.data;
        },
        (error) => {
          this.errorMessage = error
        }
      );
  }
}
