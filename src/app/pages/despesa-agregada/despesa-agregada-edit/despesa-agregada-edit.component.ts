import {Component, OnInit} from '@angular/core';
import {BreadcrumbService} from 'xng-breadcrumb';

@Component({
  selector: 'app-desp-agregada-edit',
  templateUrl: './despesa-agregada-edit.component.html'
})
export class DespesaAgregadaEditComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit(): void {
    this.breadcrumbService.set('@test-dinamicaly', 'teste');
  }

  save(event) {
    event.preventDefault();
  }
}
