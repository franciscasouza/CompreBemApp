import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the Finalizar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-finalizar',
  templateUrl: 'finalizar.html'
})
export class FinalizarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalizarPage');
  }

  final() {
  let alert = this.alertCtrl.create({
    title: 'Aviso!',
    subTitle: 'Deseja confirmar sua lista de produtos ? Após a confirmação, os dados não poderam ser alterados.',
    buttons: [
  {
    text: 'NÃO',
  },
  {
    text: 'SIM',
  }
]
  });
  alert.present();
}

}
