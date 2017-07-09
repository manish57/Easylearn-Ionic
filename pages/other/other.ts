import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Other page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-other',
  templateUrl: 'other.html',
})
export class Other {
 public param1 :any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.param1 = navParams.get('param1');
  }
   ionViewDidLoad() {
    console.log('Hello OtherPage',this.param1);
	 
  }
 
}
