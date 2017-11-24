import { HistorialPage } from './../historial/historial';
import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MedicamentosPage } from '../medicamentos/medicamentos';
import { MapaPage } from '../mapa/mapa';
import { ContactosPage } from "./../contactos/contactos";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MedicamentosPage;
  tab3Root = HistorialPage;
  tab4Root = ContactosPage;
  tab5Root = MapaPage;

  constructor() {

  }
}
