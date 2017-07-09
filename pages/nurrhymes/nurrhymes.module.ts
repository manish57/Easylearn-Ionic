import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Nurrhymes } from './nurrhymes';

@NgModule({
  declarations: [
    Nurrhymes,
  ],
  imports: [
    IonicPageModule.forChild(Nurrhymes),
  ],
  exports: [
    Nurrhymes
  ]
})
export class NurrhymesModule {}
