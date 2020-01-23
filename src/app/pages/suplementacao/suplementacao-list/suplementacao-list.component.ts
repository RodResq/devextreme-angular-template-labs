import { JiiStore } from './../../../@core/jii/jii-store';
import { ItemElemento } from './../../../domain/item-elemento';
import { SuplementacaoService } from './../../../service/suplementacao.service';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Title } from '@angular/platform-browser';
import DataSource from 'devextreme/data/data_source'

@Component({
    selector: 'app-suplementacao-list',
    templateUrl: './suplementacao-list.component.html'
})
export class SuplementacaoListComponent implements OnInit, OnDestroy {
    
    suplementacaoDataSource: DataSource;
    suplementacaoStore: JiiStore<ItemElemento>

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

        console.log(this.suplementacaoDataSource);
        
            
    }

    detail(id: number) {
        this.router.navigate(['suplementacoes', id]);
    }
    
    ngOnDestroy(): void {
    
    }
}