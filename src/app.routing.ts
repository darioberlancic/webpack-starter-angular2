import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { NewsComponent } from './components/news.component';
import { EventsComponent } from './components/events.component';
import { UsersComponent } from './components/users.component';
import { MyFolderComponent } from './components/my-folder.component';
import { NewFolderComponent } from './components/new-folder.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'my-folder', component: MyFolderComponent },
  { path: 'new-folder', component: NewFolderComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
