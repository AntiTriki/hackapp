import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import * as firebase from 'firebase';
export const firebaseConfig = {
  apiKey: "AIzaSyA9pPoH3SJ3wGlPOfVhldGcTFr0ZtqN85I",
  authDomain: "hackapp-2017.firebaseapp.com",
  databaseURL: "https://hackapp-2017.firebaseio.com",
  projectId: "hackapp-2017",
  storageBucket: "hackapp-2017.appspot.com",
  messagingSenderId: "227012793602"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      firebase.initializeApp(firebaseConfig);
    });
  }
}
