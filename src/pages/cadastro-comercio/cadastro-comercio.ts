import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from './../home/home';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-cadastro-comercio',
  templateUrl: 'cadastro-comercio.html'
})
export class CadastroComercioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroComercioPage');
  }

    showAlert() {
      let alert = this.alertCtrl.create({
        title: 'Completo!',
        subTitle: 'Seu cadastro foi feito com sucesso! Aguarde a autorização do gerente para poder logar no aplicativo',
        buttons: ['OK']
      });
      alert.present();

      this.navCtrl.push(HomePage);
    }
  }
