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

    pageSize: number = 20;
    count: number = 0;
    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(
        private title: Title,
        private suplementacaoService: SuplementacaoService<any>
    ) { }
    
    ngOnInit(): void {
        this.title.setTitle('suplementações')
        this.suplementacaoService.createDataSource().subscribe((data) => {
            this.suplementacaoDataSource = data || []
            console.log(this.suplementacaoDataSource);
        })
    }
    
    ngOnDestroy(): void {
    }
}