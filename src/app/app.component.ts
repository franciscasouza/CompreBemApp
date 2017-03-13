import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { PrincipalPage } from '../pages/principal/principal';
import { PagamentoPage } from '../pages/pagamento/pagamento';
import {AjustesPage } from '../pages/ajustes/ajustes';
import {MensagemPage } from '../pages/mensagem/mensagem';
import {ListaProdutoPage } from '../pages/lista-produto/lista-produto';
import {AtuDadosPage } from '../pages/atu-dados/atu-dados';
import {FinalizarPage } from '../pages/finalizar/finalizar';
import {AndamentoPage } from '../pages/andamento/andamento';
import {EscolherProdutoPage} from '../pages/escolher-produto/escolher-produto';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;
  prinPage = PrincipalPage;
  pagaPage = PagamentoPage;
  aju=AjustesPage;
  men=MensagemPage;
  list=ListaProdutoPage;
  atu=AtuDadosPage;
  andamento=AndamentoPage;
  esco=EscolherProdutoPage;
  finalizar=FinalizarPage;


  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
