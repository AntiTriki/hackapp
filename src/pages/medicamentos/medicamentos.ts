import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NuevomedicamentoPage } from "../nuevomedicamento/nuevomedicamento";

@IonicPage()
@Component({
  selector: 'page-medicamentos',
  templateUrl: 'medicamentos.html',
})
export class MedicamentosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  nuevoMedicamento() {
    this.navCtrl.push(NuevomedicamentoPage);
  }

}
