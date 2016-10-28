import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {ConfigService} from '../config/config.service';
import {Observable} from 'rxjs/Observable';
import {HttpService} from '../http/http.service';

import 'rxjs/add/operator/catch';

@Injectable()
export class PersonService {

    personUrl:string;

    constructor(private http: Http, private configService:ConfigService, private httpService: HttpService) {
        this.personUrl = this.configService.clientUrl();
    }

    list(): Observable<any[]> {
        return this.httpService.get(this.personUrl + '/persons')
                        .map(this.extractData)
                        .catch(this.handleError)
    }

    get(id: string): Observable<any[]> {
        return this.httpService.get(this.personUrl + '/persons/' + id)
                        .map(this.extractData)
                        .catch(this.handleError)
    }

    post(person: any): Observable<any> {
        return this.httpService.post(this.personUrl + '/persons' , JSON.stringify(person))
                        .map(this.extractData)
                        .catch(this.handleError)
    }

    delete(id: string): any {
        return this.httpService.delete(this.personUrl + '/persons/' + id)
                        .map(this.extractData)
                        .catch(this.handleError)
    }

    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
          console.log(res.status);
          throw new Error('Bad response status: ' + res.status);
        }
        if(res.text().length === 0) {
            return { }
        }
        let body = res.json();
        return body || { }
    }

    private handleError (error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
  }
}
