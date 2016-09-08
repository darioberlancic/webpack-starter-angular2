import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'my-folder',
  template: `
    <div class="container">
      <h3>{{ title }}</h3>
      <pre>{{ myFolder | json }}</pre>
    </div>
  `
})
export class MyFolderComponent implements OnInit {
  public myFolder;
  public title;
  public errorMessage: string;

  constructor(private ds: DataService) {}

  ngOnInit() {
    this.getMyFolder();
  }

  getMyFolder() {
    this.ds.getMyFolder()
      .subscribe(
        (data) => {
          this.myFolder = data;
          this.title = data.title;
        },
        (error) => { this.errorMessage = <any>error }
      )
  }
}
