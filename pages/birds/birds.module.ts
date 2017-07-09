import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Birds } from './birds';

@NgModule({
  declarations: [
    Birds,
  ],
  imports: [
    IonicPageModule.forChild(Birds),
  ],
  exports: [
    Birds
  ]
})
export class BirdsModule {}
