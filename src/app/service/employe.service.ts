import {Injectable} from '@angular/core';
import {Employee} from '../domain/employee';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({ providedIn: 'root'})
export class EmployeService {
  urlBase: string =  environment.serverUrl;

  constructor(private httpClient: HttpClient) { }

  getEmployee(): Observable<any> {
    return this.httpClient.get<JSON>(this.urlBase + '/employes');
  }
}
