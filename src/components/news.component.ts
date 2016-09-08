import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'news',
  template: `
    <div class="container">
      <h3>{{ title }}</h3>
      <pre>{{ news | json }}</pre>
    </div>
  `
})
export class NewsComponent implements OnInit {
  public news;
  public title;
  public errorMessage;

  constructor(private ds: DataService) {}

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.ds.getNews()
      .subscribe(
        (data) => {
          this.news = data,
          this.title = data.title
        },
        (error) => { this.errorMessage = error }
      )
  }
}
