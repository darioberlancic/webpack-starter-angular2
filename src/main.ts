
import 'zone.js/dist/zone';
import 'reflect-metadata/Reflect.js';
import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
