import {Component} from '@angular/core';
import DevExpress from 'devextreme';
import DataSource = DevExpress.data.DataSource;
import {DespesaAgregadaService} from '../../../service/despesa-agregada.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-despesa-agregada-list',
  templateUrl: './despesa-agregada-list.component.html'
})
export class DespesaAgregadaListComponent {
  despesasAgregadasDataSource: DataSource;

  constructor(
    private despesaAgregadaService: DespesaAgregadaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.despesaAgregadaService.getDepesasAgregadas().subscribe((data) => {
      this.despesasAgregadasDataSource = data || [];
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
