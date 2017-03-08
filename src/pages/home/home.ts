import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { CadastroPage } from './../cadastro/cadastro';
import { PrincipalPage } from './../principal/principal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  next() {
      this.navCtrl.push(CadastroPage);
    }
    logar() {
        this.navCtrl.push(PrincipalPage);
      }

}
