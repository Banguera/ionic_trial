import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { PokemonDetailsPage } from '../pages/pokemon-details/pokemon-details';
import { PokeModalPage } from '../pages/poke-modal/poke-modal';

import { PokemonService } from './shared/pokemon-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CapitalizePipe } from '../pipes/capitalize/capitalize';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ItemDetailsPage,
    PokemonDetailsPage,
    PokeModalPage,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ItemDetailsPage,
    PokeModalPage,
    PokemonDetailsPage
  ],
  providers: [
    PokemonService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
