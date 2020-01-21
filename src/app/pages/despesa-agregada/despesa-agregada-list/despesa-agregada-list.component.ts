import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import DevExpress from 'devextreme';
import { BreadcrumbService } from 'xng-breadcrumb';
import { DespesaAgregadaService } from '../../../service/despesa-agregada.service';
import DataSource = DevExpress.data.DataSource;

import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-despesa-agregada-list',
  templateUrl: './despesa-agregada-list.component.html'
})
export class DespesaAgregadaListComponent {
  despesasAgregadasDataSource: DataSource;
  despesaAgregada: Array<any>[]; 

  constructor(
    private despesaAgregadaService: DespesaAgregadaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private title: Title) {
      
      this.title.setTitle('Despesas Agregadas');
      this.despesaAgregadaService.getDepesasAgregadas().subscribe((data: any[]) => {
        console.log(data);
        
    });
  }



  detail(id: number) {
    this.router.navigate(['despesas-agregadas', id]);
  }

  edit(id: number) {
    this.router.navigate(['despesas-agregadas', 'edit', id]);
    console.log(this.router.url);
  }
}
