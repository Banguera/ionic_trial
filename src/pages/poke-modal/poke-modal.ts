import { Component } from '@angular/core';
import { Platform, NavParams, ViewController, LoadingController } from 'ionic-angular';

import { PokemonService } from '../../app/shared/pokemon-service';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PokeModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'page-poke-modal',
  templateUrl: 'poke-modal.html',
})
export class PokeModalPage {
  id: any;
  pokemon:Object = {};
  dismissObj: any;

  constructor(
    public platform: Platform,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public viewCtrl: ViewController,
    private pokeService: PokemonService) {

    this.dismissObj = this.loadingCtrl.create({
      content: 'Getting Pokemon...'
    })

    this.id = this.navParams.get('id');
    this.presentLoading();
    this.getPokemon();
  }

  presentLoading() {
    this.dismissObj.present();
  }

  getPokemon(){
    this.pokeService.getPokemonDetail(this.id).subscribe(res => {
      console.log('res in PokeModalPage:', res);
      let body = res.json();

      console.log('body in PokeModalPage:', body);
      this.pokemon = body;
      console.log('this.pokemon in PokeModalPage:', this.pokemon);
      this.dismissLoading();
    });
  }

  dismissLoading(){
    this.dismissObj.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
