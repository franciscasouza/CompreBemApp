import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastroComercioPage } from './../cadastro-comercio/cadastro-comercio';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  next() {
      this.navCtrl.push(CadastroComercioPage);
    }


}
