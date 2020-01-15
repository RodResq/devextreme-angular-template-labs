import { DxValidatorModule } from 'devextreme-angular/ui/validator';
import {NgModule} from '@angular/core';
import {DxButtonModule, DxDataGridModule, DxFormModule, DxValidationSummaryModule, DxTextBoxModule, DxDateBoxModule} from 'devextreme-angular';
import {
  DESPESA_AGREGADA_ROUTE_COMPONENTS,
  DespesaAgregadaRoutingModule
} from './despesa-agregada.routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DxiItemModule } from 'devextreme-angular/ui/nested';

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
    FlexLayoutModule,
    DxFormModule,
    DxiItemModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxDateBoxModule
  ],
  exports: []
})
export class DespesaAgregadaModule {
}
