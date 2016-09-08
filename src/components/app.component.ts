import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app',
  template: `
    <header id="header">
      <h1>{{ title }}</h1>
      <ul id="nav">
        <li class="col-xs-2" *ngFor="let tile of tiles; let i = index;">
          <a routerLink="{{ routes[i] }}" routerLinkActive="active">{{ routeNames[i] }}</a>
        </li>
      </ul>
    </header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['components/app.component.css']
})
export class AppComponent implements OnInit {
  public title = '';
  public tiles;
  public errorMessage: string;
  public routes = ['/home', '/news', '/events', '/users', '/my-folder', '/new-folder'];
  public routeNames = ['Home', 'News', 'Events', 'Users', 'My Folder', 'New Folder'];

  constructor(private ds: DataService) {}

  ngOnInit() {
    this.getIndex();
  }

  getIndex() {
    this.ds.getIndex()
      .subscribe(
        data => this.tiles = data.items,
        error => this.errorMessage = <any>error
      );
  }
}
