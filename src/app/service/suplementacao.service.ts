import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

const API_CONTEXT: string = '/suplementacoes';

@Injectable({ providedIn: 'root' })
export class SuplementacaoService<T>{

    constructor(private httpClient: HttpClient) {}

    createDataSource(): Observable<T> {
        return this.httpClient.get<T>(`${environment.serverUrl}${API_CONTEXT}`);
    }

    getSuplementacaoById(id: number): Observable<T> {
        return this.httpClient.get<T>(`${environment.serverUrl}${API_CONTEXT}/${id}`);
    }
}