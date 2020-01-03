import {Component} from '@angular/core';

@Component({
  selector: 'app-desp-agregada-edit',
  templateUrl: './despesa-agregada-edit.component.html'
})
export class DespesaAgregadaEditComponent {

  constructor() {
  }

  save(event) {
    event.preventDefault();
  }
}
