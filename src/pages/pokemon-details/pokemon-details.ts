import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CapitalizePipe } from '../../pipes/capitalize/capitalize';
/**
 * Generated class for the PokemonDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pokemon-details',
  templateUrl: 'pokemon-details.html'
})
export class PokemonDetailsPage {
  pokemon: any;

  ngOnInit(){
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pokemon = this.navParams.get('pokemon');
    console.log(this.pokemon);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PokemonDetailsPage');
  }

}
