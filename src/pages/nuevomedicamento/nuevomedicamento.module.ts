import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevomedicamentoPage } from './nuevomedicamento';

@NgModule({
  declarations: [
    NuevomedicamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevomedicamentoPage),
  ],
})
export class NuevomedicamentoPageModule {}
