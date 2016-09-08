import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'home',
  template: `
    <div class="container">
      <div [innerHTML]="frontPage"></div>
    </div>
  `
})
export class HomeComponent implements OnInit {
  public frontPage;
  public errorMessage: string;

  constructor(private ds: DataService) {}

  ngOnInit() {
    this.getFrontPage();
  }

  getFrontPage() {
    this.ds.getFrontPage()
      .subscribe(
        data => this.frontPage = data.text.data,
        error => this.errorMessage = <any>error
      );
  }
}
