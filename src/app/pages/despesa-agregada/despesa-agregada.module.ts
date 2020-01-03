import {NgModule} from '@angular/core';
import {DespesaAgregadaListComponent} from './despesa-agregada-list/despesa-agregada-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {DxButtonModule, DxDataGridModule, DxValidationSummaryModule} from 'devextreme-angular';
import {DespesaAgregadaEditComponent} from './despesa-agregada-edit/despesa-agregada-edit.component';

@NgModule({
  declarations: [
    DespesaAgregadaListComponent,
    DespesaAgregadaEditComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxButtonModule,
    DxValidationSummaryModule
  ],
  exports: []
})
export class DespesaAgregadaModule {
}
