import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/*
  Generated class for the Pagamento page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pagamento',
  templateUrl: 'pagamento.html'
})
export class PagamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagamentoPage');
  }

}
