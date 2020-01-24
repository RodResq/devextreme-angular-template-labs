import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxDataGridModule, DxDateBoxModule, DxFormModule, DxTextBoxModule, DxValidationSummaryModule, DxValidatorModule } from 'devextreme-angular';
import { DxiItemModule } from 'devextreme-angular/ui/nested';
import { SuplementacaoRoutingModule, SUPLEMENTACAO_ROUTE_COMPONENTS } from './suplementacao.routing.module';

@NgModule({
    declarations: [
        SUPLEMENTACAO_ROUTE_COMPONENTS
    ],
    imports: [
        CommonModule,
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