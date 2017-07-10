import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';

import { CapitalizePipe } from '../../pipes/capitalize/capitalize';

// import { ItemDetailsPage } from '../item-details/item-details';
import { PokemonDetailsPage } from '../pokemon-details/pokemon-details';
import { PokeModalPage } from '../poke-modal/poke-modal';

import { PokemonService } from '../../app/shared/pokemon-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  private dismissObj:any;

  public pokemons : Array<Object> = [];
  public currentPage : number = 1;
  public totalPages : number;
  public offset : number = 0;

  public display:string = "none";
  public currentPokemon:Object;

  constructor(public modalCtrl: ModalController,
              public loadingCtrl: LoadingController,
              public navCtrl: NavController,
              public navParams: NavParams,
              private pokeService: PokemonService) {

    this.dismissObj = this.loadingCtrl.create({
      content: 'Pokemons on their way...'
    })
   }

  ngOnInit() {
    this.presentLoading();
    this.getPokemons();
  }

  presentLoading() {
    this.dismissObj.present();
  }

  getPokemons(){
    this.pokeService.getPokemons(this.offset).subscribe(res => {
      let result = res.json().results

      console.log('result', result);
      this.offset = this.offset + result.length;
      this.totalPages = Math.ceil(res.json().count / 20);

      if(result){
        result.forEach(element => {
          element.id = element.url.split('/')[6];
          this.pokemons.push(element);
        });
      }
      this.dismissLoading();
    });
  }

  openModal(id) {
    let pokeModal = this.modalCtrl.create(PokeModalPage, id);
    pokeModal.present();
  }

  dismissLoading(){
    this.dismissObj.dismiss();
  }

  // itemTapped(event, item) {
  //   console.log(item);
  //   this.navCtrl.push(ItemDetailsPage, {
  //     item: item
  //   });
  // }

  pokemonTapped(event, pokemon) {
    console.log(pokemon);
    this.openModal({id: pokemon.id});
    // this.navCtrl.push(PokemonDetailsPage, {
    //   pokemon: pokemon
    // });
  }
}
