import { takeUntil } from 'rxjs/operators';
import { element } from 'protractor';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { DespesaAgregadaService } from './../../../service/despesa-agregada.service';
import { DespesaAgregada } from './../../../domain/despesa-agregada';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {BreadcrumbService} from 'xng-breadcrumb';

@Component({
  selector: 'app-desp-agregada-edit',
  templateUrl: './despesa-agregada-edit.component.html'
})
export class DespesaAgregadaEditComponent implements OnInit {
  id: number;
  despesaAgregada: DespesaAgregada = new DespesaAgregada();
  destory$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private breadcrumbService: BreadcrumbService,
    private despesaAgregadaService: DespesaAgregadaService,
    private activatedRoute: ActivatedRoute) {

      this.id = this.activatedRoute.snapshot.params['id'];
      this.despesaAgregadaService.getDepesaAgregadaById(this.id)
        .pipe(takeUntil(this.destory$))
        .subscribe((dados) => {
          this.despesaAgregada = dados;
      })
  }

  ngOnInit(): void {
    this.breadcrumbService.set('@test-dinamicaly', 'teste');
  }

  save(event) {
    event.preventDefault();
  }

}
