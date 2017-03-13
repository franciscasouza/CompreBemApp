import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EscolherProdutoPage } from '../escolher-produto/escolher-produto';
/*
  Generated class for the ListaProduto page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lista-produto',
  templateUrl: 'lista-produto.html'
})
export class ListaProdutoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaProdutoPage');
  }

  escolher() {
      this.navCtrl.push(EscolherProdutoPage);
    }

}
