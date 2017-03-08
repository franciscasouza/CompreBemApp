import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-lista-produto',
  templateUrl: 'lista-produto.html'
})
export class ListaProdutoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaProdutoPage');
  }

}
