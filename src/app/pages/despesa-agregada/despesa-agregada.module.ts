import {NgModule} from '@angular/core';
import {DxButtonModule, DxDataGridModule, DxFormModule, DxValidationSummaryModule} from 'devextreme-angular';
import {
  DESPESA_AGREGADA_ROUTE_COMPONENTS,
  DespesaAgregadaRoutingModule
} from './despesa-agregada.routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    DESPESA_AGREGADA_ROUTE_COMPONENTS,
  ],
  imports: [
    DxDataGridModule,
    DxButtonModule,
    DxValidationSummaryModule,
    DespesaAgregadaRoutingModule,
    DxDataGridModule,
    DxButtonModule,
    DxFormModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  exports: []
})
export class DespesaAgregadaModule {
}
