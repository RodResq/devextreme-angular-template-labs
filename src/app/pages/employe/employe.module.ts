import {NgModule} from '@angular/core';
import {DxButtonModule, DxDataGridModule, DxoSummaryModule} from 'devextreme-angular';
import {EmployeListComponent} from './employe-list/employe-list.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    EmployeListComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxButtonModule,
    // DxoSummaryModule,
    HttpClientModule
  ],
  exports: []
})
export class EmployeModule {

}
