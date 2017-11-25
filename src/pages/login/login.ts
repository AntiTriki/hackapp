import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegistrarPage } from '../registrar/registrar';
import { TabsPage } from '../tabs/tabs';
import * as firebase from 'firebase';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	/*e="";	
	p="";	
	user= { email : "", password : ""};*/
    
  constructor(public navCtrl: NavController, public navParams: NavParams) {    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Home(email:string, password:string){
	/*this.e=(document.getElementById("email") as HTMLInputElement).value;	
	this.p=(document.getElementById("pass") as HTMLInputElement).value;
	console.log(this.e);	
	this.user= { email : this.e, password : this.p};
    return firebase.auth.EmailAuthProvider.credential(email, password);
     /*.then(user=>Promise.resolve(user))
     .catch(err=>Promise.reject(err))*/
     this.navCtrl.setRoot(TabsPage);
  }
  Registrer(){
  	this.navCtrl.push(RegistrarPage);
  }


  

}
