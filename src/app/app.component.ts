import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { HomePage } from '../pages/home/home';
import {  PrincipalPage } from '../pages/principal/principal';
import {  CadastroComercioPage } from '../pages/cadastro-comercio/cadastro-comercio';
import {  PagamentoPage } from '../pages/pagamento/pagamento';
import {  MensagemPage } from '../pages/mensagem/mensagem';
import {  ListaProdutoPage } from '../pages/lista-produto/lista-produto';
import {  AjustesPage } from '../pages/ajustes/ajustes';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;
  cadastroPage = CadastroPage;
  principalPage= PrincipalPage;
  cadastroComercioPage= CadastroComercioPage;
  pagamentoPage= PagamentoPage;
  mensagemPage= MensagemPage;
  listaProdutoPage= ListaProdutoPage;
  ajustesPage= AjustesPage;


  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
