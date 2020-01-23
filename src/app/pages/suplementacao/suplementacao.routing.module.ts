import { SuplementacaoDetailComponent } from './suplementacao-detail/suplementacao-detail.component';
import { SuplementacaoListComponent } from './suplementacao-list/suplementacao-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: ':id',
          component: SuplementacaoDetailComponent
        },
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
    SuplementacaoListComponent,
    SuplementacaoDetailComponent
];