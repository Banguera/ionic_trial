import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PokeModalPage } from './poke-modal';

@NgModule({
  declarations: [
    PokeModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PokeModalPage),
  ],
  exports: [
    PokeModalPage
  ]
})
export class PokeModalPageModule {}
