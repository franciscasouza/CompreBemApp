import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import{AndamentoPage} from '../andamento/andamento';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public act: ActionSheetController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagamentoPage');
  }

anexar() {
  let actionSheet = this.act.create({
    title: 'Escolha uma das opções',
    buttons: [
      {
        icon: 'camera',
        text: 'Foto',
        role: 'destructive',
        handler: () => {
          console.log('Destructive clicked');
        }
      },{
        icon:'document',
        text: 'Anexar documento',
        handler: () => {
          console.log('Archive clicked');
        }
      },{
        icon:'log-out',
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
}

status() {
    this.navCtrl.push(AndamentoPage);
  }

}
