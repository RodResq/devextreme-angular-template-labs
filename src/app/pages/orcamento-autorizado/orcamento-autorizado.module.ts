import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxDataGridModule, DxDateBoxModule, DxFormModule, DxTextBoxModule, DxValidationSummaryModule } from 'devextreme-angular';
import { DxiItemModule } from 'devextreme-angular/ui/nested';
import { DxValidatorModule } from 'devextreme-angular/ui/validator';
import { ORCAMENTO_AUTORIZADO_ROUTE_COMPONENTS, OrcamentoAutorizadoRountingModule } from './orcamento-autorizado.routing.module';


@NgModule({
    declarations: [ ORCAMENTO_AUTORIZADO_ROUTE_COMPONENTS ],
    imports: [
        DxDataGridModule,
        DxButtonModule,
        DxValidationSummaryModule,
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
        DxDateBoxModule,
        OrcamentoAutorizadoRountingModule
    ],
    exports: []
})
export class OrcamentoAutorizadoModule {

}