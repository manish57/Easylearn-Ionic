import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Letters } from './letters';

@NgModule({
  declarations: [
    Letters,
  ],
  imports: [
    IonicPageModule.forChild(Letters),
  ],
  exports: [
    Letters
  ]
})
export class LettersModule {}
