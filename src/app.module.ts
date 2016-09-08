import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import './rxjs-extensions';
import { routing } from './app.routing';
import { DataService } from './services/data.service';

// Components
import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home.component';
import { NewsComponent } from './components/news.component';
import { EventsComponent } from './components/events.component';
import { UsersComponent } from './components/users.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    EventsComponent,
    UsersComponent
  ],
  providers: [ DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
