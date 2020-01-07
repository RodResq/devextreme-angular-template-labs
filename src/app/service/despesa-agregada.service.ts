import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({ providedIn: 'root'})
export class DespesaAgregadaService {

  urlBase: string =  environment.serverUrl;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  getDepesasAgregadas(): Observable<any> {
    return this.httpClient.get<JSON>(this.urlBase + '/despesas-agregadas');
  }
}