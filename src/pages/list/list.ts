import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { FormControl } from '@angular/forms';

import { CapitalizePipe } from '../../pipes/capitalize/capitalize';

// import { ItemDetailsPage } from '../item-details/item-details';
// import { PokemonDetailsPage } from '../pokemon-details/pokemon-details';
import { PokeModalPage } from '../poke-modal/poke-modal';

import { PokemonService } from '../../app/shared/pokemon-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  private lodadCtrlObj:any;

  public pokemons : Array<any> = [];
  public filteredPokemons : Array<Object> = [];
  private currentPage : number = 1;
  private totalPages : number;
  private offset : number = 0;

  public display:string = "none";
  public currentPokemon:Object;

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
        console.info(pokemon);
        return pokemon.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

  presentLoading() {
    this.lodadCtrlObj.present();
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
      this.filteredPokemons = this.pokemons;
      this.dismissLoading();
    });
  }

  openModal(id) {
    let pokeModal = this.modalCtrl.create(PokeModalPage, id);
    pokeModal.present();
  }

  dismissLoading(){
    this.lodadCtrlObj.dismiss();
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
