import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import { DespesaAgregada } from '../domain/despesa-agregada';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class DespesaAgregadaService {

  urlBase: string =  environment.urlBase;
  despesaAgregada: Observable<any[]>;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  getDepesasAgregadas(): Observable<any[]>{
    return this.httpClient.get<JSON[]>(this.urlBase + '/db');
      
  }

  getDepesaAgregadaById(id: number): Observable<DespesaAgregada> {
    return this.httpClient.get<DespesaAgregada>(this.urlBase + '/despesas-agregadas/' + id);
  }


}
