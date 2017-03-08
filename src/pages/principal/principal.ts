import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PagamentoPage } from './../pagamento/pagamento';
import { AjustesPage } from './../ajustes/ajustes';
import { MensagemPage } from '../mensagem/mensagem';
import { ListaProdutoPage } from '../lista-produto/lista-produto';


@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }
  pagamento() {
      this.navCtrl.push(PagamentoPage);
    }
    ajustes() {
        this.navCtrl.push(AjustesPage);
      }
      men() {
          this.navCtrl.push(MensagemPage);
        }
        list() {
            this.navCtrl.push(ListaProdutoPage);
          }

}
