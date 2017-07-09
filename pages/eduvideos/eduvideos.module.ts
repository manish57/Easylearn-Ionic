import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Eduvideos } from './eduvideos';

@NgModule({
  declarations: [
    Eduvideos,
  ],
  imports: [
    IonicPageModule.forChild(Eduvideos),
  ],
  exports: [
    Eduvideos
  ]
})
export class EduvideosModule {}
