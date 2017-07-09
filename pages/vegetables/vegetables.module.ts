import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Vegetables } from './vegetables';

@NgModule({
  declarations: [
    Vegetables,
  ],
  imports: [
    IonicPageModule.forChild(Vegetables),
  ],
  exports: [
    Vegetables
  ]
})
export class VegetablesModule {}
