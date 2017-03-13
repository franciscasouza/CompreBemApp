import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
/*
  Generated class for the Mensagem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mensagem',
  templateUrl: 'mensagem.html'
})
export class MensagemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MensagemPage');
  }


}
