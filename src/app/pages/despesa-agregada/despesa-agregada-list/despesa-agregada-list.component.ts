import { Component, OnInit } from '@angular/core';
import DevExpress from 'devextreme';
import DataSource = DevExpress.data.DataSource;
import {DespesaAgregadaService} from '../../../service/despesa-agregada.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BreadcrumbService} from 'xng-breadcrumb';
import {DespesaAgregada} from '../../../domain/despesa-agregada';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-despesa-agregada-list',
  templateUrl: './despesa-agregada-list.component.html'
})
export class DespesaAgregadaListComponent {
  despesasAgregadasDataSource: DataSource;

  constructor(
    private despesaAgregadaService: DespesaAgregadaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private title: Title) {
      
      this.title.setTitle('Despesas Agregadas');
      this.despesaAgregadaService.getDepesasAgregadas().subscribe((data) => {
      this.despesasAgregadasDataSource = data || [];
      this.breadcrumbService.set('@despesa-agregada-list', 'Despesas-agregadas-list');
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
