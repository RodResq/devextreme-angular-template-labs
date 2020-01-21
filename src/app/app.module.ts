import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavInnerToolbarModule, SideNavOuterToolbarModule, SingleCardModule } from './layouts';
import { DespesaAgregadaModule } from './pages/despesa-agregada/despesa-agregada.module';
import { OrcamentoAutorizadoModule } from './pages/orcamento-autorizado/orcamento-autorizado.module';
import { SuplementacaoModule } from './pages/suplementacao/suplementacao.module';
import { FooterModule, LoginFormModule } from './shared/components';
import { AppInfoService, AuthService, ScreenService } from './shared/services';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    LoginFormModule,
    AppRoutingModule,
    DespesaAgregadaModule,
    OrcamentoAutorizadoModule,
    SuplementacaoModule,
    BreadcrumbModule,
    MatIconModule,
    FontAwesomeModule
  ],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
