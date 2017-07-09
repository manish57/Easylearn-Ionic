import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
//import { Shake } from '@ionic-native/shake';
//import { CallNumber } from '@ionic-native/call-number';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Letters } from '../pages/letters/letters';
import { Numbers } from '../pages/numbers/numbers';
import { Fruits } from '../pages/fruits/fruits';
import { Vegetables } from '../pages/vegetables/vegetables';
import { Birds } from '../pages/birds/birds';
import { Animals } from '../pages/animals/animals';
import { Flowers } from '../pages/flowers/flowers';
import { Eduvideos } from '../pages/eduvideos/eduvideos';
import { Nurrhymes } from '../pages/nurrhymes/nurrhymes';
import { Canvas } from '../pages/canvas/canvas';
import { Other } from '../pages/other/other';
import { Aboutme } from '../pages/aboutme/aboutme';
import { CanvasDraw } from '../components/canvas-draw/canvas-draw';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Letters,
    Numbers,
    Fruits,
    Vegetables,
    Birds,
    Animals,
    Flowers,
    Eduvideos,
    Nurrhymes,
    CanvasDraw,
    Canvas,
    Other,
    Aboutme
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Letters,
    Numbers,
    Fruits,
    Vegetables,
    Birds,
    Animals,
    Flowers,
    Eduvideos,
    Nurrhymes,
    Canvas,
    Other,
    Aboutme
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    //CallNumber,
    //Shake,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
