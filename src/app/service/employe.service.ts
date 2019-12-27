import {Injectable} from '@angular/core';
import {Employee} from '../domain/employee';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ActivatedRoute} from '@angular/router';

@Injectable({ providedIn: 'root'})
export class EmployeService {
  urlBase: string =  environment.serverUrl;
  employes: Employee[];

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute) { }

  getEmployee(): Observable<any> {
    return this.httpClient.get<JSON>(this.urlBase + '/employes');
  }

  getEmployById(id): Observable<any> {
    return this.httpClient.get<JSON>(this.urlBase + '/employes/' + id);
  }

  getEmployeEditById(id): Observable<any> {
    return this.httpClient.put(this.urlBase + '/employes/' + id, null);
  }
}
