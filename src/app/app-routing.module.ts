import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from './shared/services';
import {HomeComponent} from './pages/home/home.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {DisplayDataComponent} from './pages/display-data/display-data.component';
import {DxDataGridModule, DxFormModule} from 'devextreme-angular';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumb: {
        label: 'Home',
        info: { mydata: { icon: 'home', iconType: 'material' } }
      }
    },
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'despesas-agregadas',
    loadChildren: './pages/despesa-agregada/despesa-agregada.module#DespesaAgregadaModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DxDataGridModule,
    DxFormModule,
  ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, DisplayDataComponent]
})
export class AppRoutingModule { }
