import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxDataGridModule, DxDateBoxModule, DxFormModule, DxTextBoxModule, DxValidationSummaryModule } from 'devextreme-angular';
import { DxiItemModule } from 'devextreme-angular/ui/nested';
import { DxValidatorModule } from 'devextreme-angular/ui/validator';
import { DespesaAgregadaRoutingModule, DESPESA_AGREGADA_ROUTE_COMPONENTS } from './despesa-agregada.routing.module';

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
