import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'new-folder',
  template: `
    <div class="container">
      <h3>{{ title }}</h3>
      <pre>{{ newFolder | json }}</pre>
    </div>
  `
})
export class NewFolderComponent implements OnInit {
  public newFolder;
  public title;
  public errorMessage: string;

  constructor(private ds: DataService) {}

  ngOnInit() {
    this.getNewFolder();
  }

  getNewFolder() {
    this.ds.getNewFolder()
      .subscribe(
        (data) => {
          this.newFolder = data;
          this.title = data.title;
        },
        (error) => { this.errorMessage = error }
      );
  }
}
