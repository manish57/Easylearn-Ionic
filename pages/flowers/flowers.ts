import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Canvas } from '../canvas/canvas';

/**
 * Generated class for the Flowers page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-flowers',
  templateUrl: 'flowers.html',
})
export class Flowers {
@ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Flowers');
  }

  goToSlide() {
    this.slides.slideTo(4, 500);
  }

  begin() {
    this.slides.slideTo(0, 500);
  }
  
  canvass() {
    this.navCtrl.push(Canvas);
  }

}
