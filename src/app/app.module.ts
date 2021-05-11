import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { RouterModule } from '@angular/router'; modulo de roteamento foi separado
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
//import { MenuComponent } from './navegacao/menu/menu.component';
//import { HomeComponent } from './navegacao/home/home.component';
//import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
//import { rootRouterConfig } from './app.routes'; modulo de roteamento foi separado
import { CadastroComponent } from './demos/reactiveforms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';

import { AppRoutingModule } from './app.routes';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';

//import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
//import { ProdutoDashboardComponent } from './demos/arquitetura-componentes/produto-dashboard/produto-dashboard.component'; // retirar pq foi add automatico

@NgModule({
  declarations: [
    AppComponent,
    //MenuComponent,
    //HomeComponent,
    //FooterComponent,    
    SobreComponent,
    CadastroComponent
    //AdminDashboardComponent    
    //ProdutoDashboardComponent remover pq foi add automatico
  ],
  imports: [
    NavegacaoModule,//modulo separado
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgBrazil,
    TextMaskModule,
    CustomFormsModule,
    //[RouterModule.forRoot(rootRouterConfig, { useHash: false})]
    AppRoutingModule//modulo de roteamento separado
  ],
  providers: [
    //{provide: APP_BASE_HREF, useValue: '/'} coloca no index.html principal
    AuthGuard,
    CadastroGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
