import {NgModule} from '@angular/core';
import {DxButtonModule, DxDataGridModule} from 'devextreme-angular';
import {EmployeListComponent} from './employe-list/employe-list.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {EmployeDetailComponent} from './employe-detail/employe-detail.component';


@NgModule({
  declarations: [
    EmployeListComponent,
    EmployeDetailComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxButtonModule,
    HttpClientModule
  ],
  exports: []
})
export class EmployeModule {

}
