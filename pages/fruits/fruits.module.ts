import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Fruits } from './fruits';

@NgModule({
  declarations: [
    Fruits,
  ],
  imports: [
    IonicPageModule.forChild(Fruits),
  ],
  exports: [
    Fruits
  ]
})
export class FruitsModule {}
