import {NgModule} from '@angular/core';
import {DxButtonModule, DxDataGridModule, DxFormModule} from 'devextreme-angular';
import {EmployeListComponent} from './employe-list/employe-list.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {EmployeDetailComponent} from './employe-detail/employe-detail.component';
import {EmployeEditComponent} from './employe-edit/employe-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    EmployeListComponent,
    EmployeDetailComponent,
    EmployeEditComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxButtonModule,
    DxFormModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: []
})
export class EmployeModule {

}
