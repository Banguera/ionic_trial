import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PokemonDetailsPage } from './pokemon-details';

@NgModule({
  declarations: [
    PokemonDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PokemonDetailsPage),
  ],
  exports: [
    PokemonDetailsPage
  ]
})
export class PokemonDetailsPageModule {}
