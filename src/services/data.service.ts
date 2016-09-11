import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  private headers = new Headers({ 'Accept': 'application/json' });
  private apiRoot = 'http://kitconcept.com:19080/Plone/';
  public currentEndpoint = {
    curr: this.apiRoot + 'front-page'
  };

  constructor(private http: Http) {}

  getRoot(): Observable<Response> {
    return this.request(this.apiRoot);
  }

  getData(endpoint): Observable<Response> {
    return this.request(endpoint);
  }

  setCurrentEndpoint(endpoint) {
    this.currentEndpoint.curr = endpoint;
  }

  getCurrentEndpoint() {
    return this.currentEndpoint.curr;
  }

  private request(endpoint) {
    return this.http.get(endpoint, { headers: this.headers })
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
