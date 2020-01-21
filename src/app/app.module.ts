import { OrcamentoAutorizadoModule } from './pages/orcamento-autorizado/orcamento-autorizado.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SideNavInnerToolbarModule, SideNavOuterToolbarModule, SingleCardModule} from './layouts';
import {FooterModule, LoginFormModule} from './shared/components';
import {AppInfoService, AuthService, ScreenService} from './shared/services';
import {AppRoutingModule} from './app-routing.module';
import {BreadcrumbModule} from 'xng-breadcrumb';
import {DespesaAgregadaModule} from './pages/despesa-agregada/despesa-agregada.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    BreadcrumbModule,
    MatIconModule,
    FontAwesomeModule
  ],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
