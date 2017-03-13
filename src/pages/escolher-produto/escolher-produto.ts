import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FinalizarPage } from '../finalizar/finalizar';

/*
  Generated class for the EscolherProduto page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-escolher-produto',
  templateUrl: 'escolher-produto.html'
})
export class EscolherProdutoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EscolherProdutoPage');
  }

  finalizar() {
      this.navCtrl.push(FinalizarPage);
    }



}
