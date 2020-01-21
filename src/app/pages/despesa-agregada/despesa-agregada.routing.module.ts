import { DespesaAgregadaEditComponent } from './despesa-agregada-edit/despesa-agregada-edit.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DespesaAgregadaListComponent} from './despesa-agregada-list/despesa-agregada-list.component';
import {DespesaAgregadaDetailComponent} from './despesa-agregada-detail/despesa-agregada-detail.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: DespesaAgregadaDetailComponent,
        data: {
          breadcrumb: {
            alias: 'despesa-agregada-detail'
          }
        },
      },
      {
        path: 'edit',
        children: [
          {
            path: ':id',
            component: DespesaAgregadaEditComponent,
            data: {
              breadcrumb: {
                alias: 'despesa-agregada-edit'
              }
            }
          }
        ]

      },
      {
        path: '',
        component: DespesaAgregadaListComponent
      }
    ],
  },
  {
    path: '**', component: DespesaAgregadaListComponent
  }
]


@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesaAgregadaRoutingModule { }

export const DESPESA_AGREGADA_ROUTE_COMPONENTS = [
  DespesaAgregadaListComponent,
  DespesaAgregadaDetailComponent,
  DespesaAgregadaEditComponent
];


