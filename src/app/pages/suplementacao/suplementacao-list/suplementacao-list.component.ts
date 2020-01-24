import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import DataSource from 'devextreme/data/data_source';
import { Subject } from 'rxjs';
import { JiiStore } from './../../../@core/jii/jii-store';
import { ItemElemento } from './../../../domain/item-elemento';
import { SuplementacaoService } from './../../../service/suplementacao.service';

@Component({
    selector: 'app-suplementacao-list',
    templateUrl: './suplementacao-list.component.html'
})
export class SuplementacaoListComponent implements OnInit, OnDestroy {
    
    suplementacaoDataSource: DataSource;
    suplementacaoStore: JiiStore<ItemElemento>
    itemElemento: ItemElemento = new ItemElemento();
    

    pageSize: number = 20;
    count: number = 0;
    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(
        private title: Title,
        private suplementacaoService: SuplementacaoService,
        private router: Router
    ) { }
    
    ngOnInit(): void {
        this.title.setTitle('suplementações')
        this.suplementacaoDataSource = this.suplementacaoService.createDataSource({
            store: this.suplementacaoStore
        });
    }

    detail(id: number) {
        this.router.navigate(['suplementacoes', id]);
    }
    
    ngOnDestroy(): void {
    
    }
}