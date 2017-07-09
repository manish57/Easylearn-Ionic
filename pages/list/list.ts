import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Letters } from '../letters/letters';
import { Numbers } from '../numbers/numbers';
import { Fruits } from '../fruits/fruits';
import { Vegetables } from '../vegetables/vegetables';
import { Birds } from '../birds/birds';
import { Animals } from '../animals/animals';
import { Flowers } from '../flowers/flowers';
import { Eduvideos } from '../eduvideos/eduvideos';
import { Nurrhymes } from '../nurrhymes/nurrhymes';
import { Other } from '../other/other';
import { Aboutme } from '../aboutme/aboutme';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
 public uname:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
    letters() {
      this.navCtrl.push(Letters);
    }
    
    about(){
      this.navCtrl.push(Aboutme);
    }
    
    numbers() {
      this.navCtrl.push(Numbers);
    }

    fruits() {
      this.navCtrl.push(Fruits);
    }

    vegetables() {
      this.navCtrl.push(Vegetables);
    }

    birds() {
      this.navCtrl.push(Birds);
    }

    animals() {
      this.navCtrl.push(Animals);
    }

    flowers() {
      this.navCtrl.push(Flowers);
    }

    eduvideos() {
      this.navCtrl.push(Eduvideos);
    }

    nurrhymes() {
      this.navCtrl.push(Nurrhymes);
    }
    
     nextpage(){
  this.navCtrl.push(Other,{param1:this.uname});

  
		}


}
