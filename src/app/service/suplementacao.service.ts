import { ItemElemento } from './../domain/item-elemento';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { Observable } from 'rxjs';
import { DataSourceConfig } from '../@core/data-source-config';
import { environment } from './../../environments/environment';
import { JiiStore } from './../@core/jii/jii-store';
import { CrudService } from '../@core/crud.service';

const API_CONTEXT: string = '/itensElementos';

@Injectable({ providedIn: 'root' })
export class SuplementacaoService extends CrudService<any>{

    constructor(private httpClient: HttpClient) {
    super(httpClient, API_CONTEXT)
    }

    createDataSource(config?: DataSourceConfig<ItemElemento>): DataSource {
        let configuration: any = {
            store: new JiiStore(this.httpClient, API_CONTEXT),
            paginate: true
        };
        // if (config) for (const key in config)
        //     if(config.hasOwnProperty(key)) configuration[key] = config[key];
        return new DataSource(configuration);
    }

    getSuplementacaoById(id: number): Observable<ItemElemento> {
        return this.httpClient.get<ItemElemento>(`${environment.urlBase}${API_CONTEXT}/${id}`);
    }
}