import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/listaViagens/list';
import { AddPage } from '../pages/addViagem/add';
import { AddroutPage } from '../pages/addPasseios/addrout';
import { ListaroutPage } from '../pages/listaPasseios/listarout';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
/* LocalStorage */
import { LocalStorageModule } from 'angular-2-local-storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AddPage,
    AddroutPage,
    ListaroutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    LocalStorageModule.withConfig({
  prefix: 'NyApp',
  storageType: 'localStorage'
})

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AddPage,
    AddroutPage,
    ListaroutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
