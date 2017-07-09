import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Numbers } from './numbers';

@NgModule({
  declarations: [
    Numbers,
  ],
  imports: [
    IonicPageModule.forChild(Numbers),
  ],
  exports: [
    Numbers
  ]
})
export class NumbersModule {}
