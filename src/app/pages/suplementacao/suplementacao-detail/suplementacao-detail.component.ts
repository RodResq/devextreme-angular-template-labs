import { ItemElemento } from './../../../domain/item-elemento';
import { ActivatedRoute } from '@angular/router';
import { SuplementacaoService } from './../../../service/suplementacao.service';
import { Subject } from 'rxjs';
import  DataSource  from 'devextreme/data/data_source';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-suplementacao-detail',
    templateUrl: './suplementacao-detail.component.html'
})
export class SuplementacaoDetailComponent implements OnInit{

    suplementacaoDetailDataSource: DataSource;
    pageSize: number = 20;
    count: number = 0;
    destroy$: Subject<boolean> = new Subject<boolean>()
    id: number

    constructor(
        private title: Title,
        private suplementacaoService: SuplementacaoService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.title.setTitle('Detalhes da Suplementação');
        this.id = +this.activatedRoute.snapshot.paramMap.get('id');
        // this.suplementacaoService.getSuplementacaoById(this.id).subscribe((data) => {
        //     this.suplementacaoDetailDataSource = data || [];
            
        // })
    }

}