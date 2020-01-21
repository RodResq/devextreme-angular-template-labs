import { OrcamentoAutorizadoListComponent } from './orcamento-autorizado-list/orcamento-autorizado-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: '',
          component: OrcamentoAutorizadoListComponent
        }
      ],
    },
    {
      path: '**', component: OrcamentoAutorizadoListComponent
    }
  ]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrcamentoAutorizadoRountingModule { }

export const ORCAMENTO_AUTORIZADO_ROUTE_COMPONENTS = [
    OrcamentoAutorizadoListComponent
];