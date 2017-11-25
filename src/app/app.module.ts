import { MedicamentosPage } from './../pages/medicamentos/medicamentos';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ContactosPage } from "../pages/contactos/contactos";
import { HistorialPage } from "../pages/historial/historial";
import { MapaPage } from "../pages/mapa/mapa";
import { LoginPage } from "../pages/login/login";
import { RegistrarPage } from '../pages/registrar/registrar';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import {NuevomedicamentoPage} from "../pages/nuevomedicamento/nuevomedicamento";
import { FirebaseDataProvider } from '../providers/firebase-data/firebase-data';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactosPage,
    HistorialPage,
    MapaPage,
    MedicamentosPage,
    TabsPage,
    LoginPage,
    RegistrarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactosPage,
    HistorialPage,
    MapaPage,
    MedicamentosPage,
    NuevomedicamentoPage,
    TabsPage,
    LoginPage,
    RegistrarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseDataProvider
  ]
})
export class AppModule {}
