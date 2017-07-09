import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Flowers } from './flowers';

@NgModule({
  declarations: [
    Flowers,
  ],
  imports: [
    IonicPageModule.forChild(Flowers),
  ],
  exports: [
    Flowers
  ]
})
export class FlowersModule {}
