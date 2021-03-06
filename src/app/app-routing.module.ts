import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from './shared/services';
import {HomeComponent} from './pages/home/home.component';
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
    loadChildren: './pages/despesa-agregada/despesa-agregada.module#DespesaAgregadaModule',
    data: {
      breadcrumb: {alias: 'despesa-agregada-list'},
    }
  },
  {
    path: 'orcamentos-autorizados',
    loadChildren: './pages/orcamento-autorizado/orcamento-autorizado.module#OrcamentoAutorizadoModule',
    data: {
      breadcrumb: {alias: 'orcamento-autorizado-list'},
    }
  },
  {
    path: 'suplementacoes', loadChildren: './pages/suplementacao/suplementacao.module#SuplementacaoModule',
  },
  { path: '**', pathMatch: 'full', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DxDataGridModule,
    DxFormModule,
  ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent]
})
export class AppRoutingModule { }
