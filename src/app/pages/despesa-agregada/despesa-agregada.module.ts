import {NgModule} from '@angular/core';
import {DxButtonModule, DxDataGridModule, DxValidationSummaryModule} from 'devextreme-angular';
import {DESPESA_AGREGADA_ROUTE_COMPONENTS, DespesaAgregadaRoutingModule} from './despesa-agregada.routing.module';

@NgModule({
  declarations: [ DESPESA_AGREGADA_ROUTE_COMPONENTS ],
  imports: [
    DxDataGridModule,
    DxButtonModule,
    DxValidationSummaryModule,
    DespesaAgregadaRoutingModule,
  ],
  exports: []
})
export class DespesaAgregadaModule {
}
