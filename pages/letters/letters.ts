import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Canvas } from '../canvas/canvas';

/**
 * Generated class for the Letters page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-letters',
  templateUrl: 'letters.html',
})
export class Letters {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  goToSlide() {
    this.slides.slideTo(25, 500);
  }

  begin() {
    this.slides.slideTo(0, 500);
  }
  
  canvass() {
    this.navCtrl.push(Canvas);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Letters');
  }

}
