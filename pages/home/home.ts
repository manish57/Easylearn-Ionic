import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration';
//import { CallNumber } from '@ionic-native/call-number';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private vibration: Vibration, public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {

    
  }
    presentLoading() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 5000,
      dismissOnPageChange: true
    }).present();

    this.navCtrl.push(ListPage);
    }
    
    skip() {
      this.navCtrl.push(ListPage);
      this.vibration.vibrate(500);
      let alert = this.alertCtrl.create({
      title: 'Welcome to EasyLearn',
      subTitle: 'Let the Fun begin',
      buttons: ['OK']
    });
    alert.present();
    }

    
}
