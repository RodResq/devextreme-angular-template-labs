import { SuplementacaoListComponent } from './suplementacao-list/suplementacao-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: '',
          component: SuplementacaoListComponent
        }
      ],
    },
    {
      path: '**', component: SuplementacaoListComponent
    }
  ]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SuplementacaoRoutingModule { }

export const SUPLEMENTACAO_ROUTE_COMPONENTS = [
    SuplementacaoListComponent
];