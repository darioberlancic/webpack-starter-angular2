import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  private headers = new Headers({ 'Accept': 'application/json' });
  private apiUrl = 'http://kitconcept.com:19080/Plone/';

  constructor(private http: Http) {}

  getIndex(): Observable<Response> {
    return this.request('');
  }

  getFrontPage(): Observable<Response> {
    return this.request('front-page');
  }

  getNews(): Observable<Response> {
    return this.request('news');
  }

  getEvents(): Observable<Response> {
    return this.request('events');
  }

  getMembers(): Observable<Response> {
    return this.request('Members');
  }

  getMyFolder(): Observable<Response> {
    return this.request('my-folder');
  }

  getNewFolder(): Observable<Response> {
    return this.request('new-folder');
  }

  private request(endpoint) {
    return this.http.get(this.apiUrl + endpoint, { headers: this.headers })
    .map(this.extractData)
    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console
    return Observable.throw(errMsg);
  }

}
