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
import { ContactPage } from '../pages/contact/contact';
import { DialerPage } from './../pages/dialer/dialer';
import { SmsPage } from './../pages/sms/sms';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    DialerPage,
    SmsPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    DialerPage,
    SmsPage,
    LoginPage,
    RegisterPage
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
    Firebase,
    AuthServiceProvider
  ]
})
export class AppModule {}
