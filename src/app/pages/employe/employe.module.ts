import {NgModule} from '@angular/core';
import {DxButtonModule, DxDataGridModule} from 'devextreme-angular';
import {EmployeComponent} from './employe.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    EmployeComponent
  ],
  imports: [
    DxDataGridModule,
    DxButtonModule,
    HttpClientModule
  ],
  exports: []
})
export class EmployeModule {

}
