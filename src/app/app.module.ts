import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import {  PrincipalPage } from '../pages/principal/principal';
import { CadastroComercioPage } from '../pages/cadastro-comercio/cadastro-comercio';
import { PagamentoPage } from '../pages/pagamento/pagamento';
import { MensagemPage } from '../pages/mensagem/mensagem';
import { ListaProdutoPage } from '../pages/lista-produto/lista-produto';
import { AjustesPage } from '../pages/ajustes/ajustes';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalPage,
    CadastroPage,
    CadastroComercioPage,
    PagamentoPage,
    MensagemPage,
    ListaProdutoPage,
    AjustesPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage,
    PrincipalPage,
    CadastroComercioPage,
    PagamentoPage,
    MensagemPage,
    ListaProdutoPage,
    AjustesPage



  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
