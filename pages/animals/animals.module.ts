import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Animals } from './animals';

@NgModule({
  declarations: [
    Animals,
  ],
  imports: [
    IonicPageModule.forChild(Animals),
  ],
  exports: [
    Animals
  ]
})
export class AnimalsModule {}
