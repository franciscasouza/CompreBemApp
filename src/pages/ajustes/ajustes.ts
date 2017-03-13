import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from './../principal/principal';
import { HomePage } from './../home/home';
import { AtuDadosPage } from '../atu-dados/atu-dados';
/*
  Generated class for the Ajustes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html'
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }

    atu() {
        this.navCtrl.push(AtuDadosPage);
      }

      sair() {
          this.navCtrl.push(HomePage);
        }

}
