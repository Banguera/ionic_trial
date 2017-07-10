import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { FormControl } from '@angular/forms';

import { PokeModalPage } from '../poke-modal/poke-modal';

import { PokemonService } from '../../app/shared/pokemon-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  private lodadCtrlObj:any;

  public pokemons : Array<any> = [];
  public filteredPokemons : Array<any> = [];
  private offset : number = 0;

  public searchControl: FormControl;
  private searchTerm:string = '';

  constructor(public modalCtrl: ModalController,
              public loadingCtrl: LoadingController,
              public navCtrl: NavController,
              public navParams: NavParams,
              private pokeService: PokemonService) {

    this.searchControl = new FormControl();
    this.lodadCtrlObj = this.loadingCtrl.create({
      content: 'Pokemons on their way...'
    })
   }

  ngOnInit() {
    this.presentLoading();
    this.getPokemons();

    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.setFilteredPokemons();
    });
  }

  setFilteredPokemons(){
    this.filteredPokemons = this.pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

  presentLoading() {
    this.lodadCtrlObj.present();
  }

  getPokemons(infiniteScroll=null){
    this.pokeService.getPokemons(this.offset).subscribe(res => {
      let result = res.json().results

      this.offset = this.offset + result.length;

      if(result){
        result.forEach(element => {
          element.id = element.url.split('/')[6];
          this.pokemons.push(element);
        });
      }
      this.setFilteredPokemons();
      infiniteScroll ? infiniteScroll.complete() : this.dismissLoading();
    });
  }

  openModal(id) {
    let pokeModal = this.modalCtrl.create(PokeModalPage, id);
    pokeModal.present();
  }

  dismissLoading(){
    this.lodadCtrlObj.dismiss();
  }

  doInfinite(infiniteScroll) {
    this.getPokemons(infiniteScroll);
  }

  pokemonTapped(event, pokemon) {
    console.log(pokemon);
    this.openModal({id: pokemon.id});
    // this.navCtrl.push(PokemonDetailsPage, {
    //   pokemon: pokemon
    // });
  }
}
