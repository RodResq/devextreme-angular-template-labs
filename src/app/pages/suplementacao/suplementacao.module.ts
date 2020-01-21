import { SuplementacaoRoutingModule, SUPLEMENTACAO_ROUTE_COMPONENTS } from './suplementacao.routing.module';
import { NgModule } from '@angular/core';
import { DxDataGridModule, DxButtonModule, DxValidationSummaryModule, DxFormModule, DxTextBoxModule, DxValidatorModule, DxDateBoxModule } from 'devextreme-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DxiItemModule } from 'devextreme-angular/ui/nested';

@NgModule({
    declarations: [
        SUPLEMENTACAO_ROUTE_COMPONENTS
    ],
    imports: [
        DxDataGridModule,
        DxButtonModule,
        DxValidationSummaryModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        FlexLayoutModule,
        DxFormModule,
        DxiItemModule,
        DxTextBoxModule,
        DxValidatorModule,
        DxDateBoxModule,
        SuplementacaoRoutingModule
    ],
    exports: []
})
export class SuplementacaoModule {

}