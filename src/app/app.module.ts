import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PrincipalPage } from '../pages/principal/principal';
import { PagamentoPage } from '../pages/pagamento/pagamento';
import {AjustesPage } from '../pages/ajustes/ajustes';
import {MensagemPage } from '../pages/mensagem/mensagem';
import {ListaProdutoPage } from '../pages/lista-produto/lista-produto';
import {AtuDadosPage } from '../pages/atu-dados/atu-dados';
import {AndamentoPage } from '../pages/andamento/andamento';
import {EscolherProdutoPage} from '../pages/escolher-produto/escolher-produto';
import {FinalizarPage } from '../pages/finalizar/finalizar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalPage,
    PagamentoPage,
    AjustesPage,
    MensagemPage,
    ListaProdutoPage,
    AtuDadosPage,
    AndamentoPage,
    EscolherProdutoPage,
    FinalizarPage


  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrincipalPage,
    PagamentoPage,
    AjustesPage,
    MensagemPage,
    ListaProdutoPage,
    AtuDadosPage,
    AndamentoPage,
    EscolherProdutoPage,
    FinalizarPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
