import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Aboutme } from './aboutme';

@NgModule({
  declarations: [
    Aboutme,
  ],
  imports: [
    IonicPageModule.forChild(Aboutme),
  ],
  exports: [
    Aboutme
  ]
})
export class AboutmeModule {}
