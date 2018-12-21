import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Contacts} from '@ionic-native/contacts';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { CallNumber } from '@ionic-native/call-number';
import { Calendar } from '@ionic-native/calendar';
import { Camera } from '@ionic-native/camera';
import { Firebase} from '@ionic-native/firebase';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Contacts,
    AndroidPermissions,
    CallNumber,
    Calendar,
    Camera,
    Firebase
  ]
})
export class AppModule {}
