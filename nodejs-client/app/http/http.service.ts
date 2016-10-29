import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  get(url:string) {
    let headers = new Headers()
    return this.http.get(url, {
      headers: headers
    })
  }

  post(url:string, data:any) {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.post(url, data, {
      headers: headers
    })
  }

  put(url:string, data:any) {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.put(url, data, {
      headers: headers
    })
  }

  delete(url:string) {
    let headers = new Headers()
    return this.http.delete(url, {
      headers: headers
    })
  }
}
