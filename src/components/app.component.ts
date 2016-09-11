import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app',
  template: `
    <header id="header">
      <h1>{{ title }}</h1>
      <ul id="nav">
        <li class="col-xs-2" *ngFor="let tile of tiles; let i = index;">
          <button class="btn btn-default" type="button" (click)="func(routes[i], tile['@id'])">{{ routeNames[i] }}</button>
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

  constructor(
    private ds: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getRoot();
  }

  getRoot() {
    this.ds.getRoot()
      .subscribe(
        data => this.tiles = data.items,
        error => this.errorMessage = <any>error
      );
  }

  func(route, endpoint) {
    // console.log(route);
    // console.log(endpoint);
    this.ds.setCurrentEndpoint(endpoint);
    this.router.navigate([route]);
  }
}
