import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginFormComponent} from './shared/components';
import {AuthGuardService} from './shared/services';
import {HomeComponent} from './pages/home/home.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {DisplayDataComponent} from './pages/display-data/display-data.component';
import {DxDataGridModule, DxFormModule} from 'devextreme-angular';
import {EmployeListComponent} from './pages/employe/employe-list/employe-list.component';
import {EmployeDetailComponent} from './pages/employe/employe-detail/employe-detail.component';
import {DespesaAgregadaListComponent} from './pages/despesa-agregada/despesa-agregada-list/despesa-agregada-list.component';
import {DespesaAgregadaEditComponent} from './pages/despesa-agregada/despesa-agregada-edit/despesa-agregada-edit.component';
import {EmployeEditComponent} from './pages/employe/employe-edit/employe-edit.component';
import {DespesaAgregadaDetailComponent} from './pages/despesa-agregada/despesa-agregada-detail/despesa-agregada-detail.component';

const routes: Routes = [
  {
    path: 'display-data',
    component: DisplayDataComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
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
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'despesas-agregadas',
    loadChildren: './pages/despesa-agregada/despesa-agregada.module#DespesaAgregadaModule'
  },
  {
    path: '**',
    redirectTo: 'home',
    canActivate: [ AuthGuardService ]
  }
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
