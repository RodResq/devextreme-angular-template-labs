import {Component} from '@angular/core';
import {DespesaAgregadaService} from '../../../service/despesa-agregada.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DespesaAgregada} from '../../../domain/despesa-agregada';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-despesa-agregada-detail',
  templateUrl: './despesa-agregada-detail.component.html'
})
export class DespesaAgregadaDetailComponent {
  id: number;
  despesaAgregada: DespesaAgregada = new DespesaAgregada();
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private despesaAgregadaService: DespesaAgregadaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.despesaAgregadaService.getDepesaAgregadaById(this.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((dado) => {
      this.despesaAgregada = dado;
    });
  }

  back() {
    this.router.navigate(['despesas-agregadas']);
  }
}
