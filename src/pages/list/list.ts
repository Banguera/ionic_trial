import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';

import { PokemonService } from '../../app/shared/pokemon-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  public pokemons : Array<Object> = [];
  public currentPage : number = 1;
  public totalPages : number;
  public offset : number = 0;

  public display:string = "none";
  public currentPokemon:Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pokeService: PokemonService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
    this.getPokemons()
  }

  getPokemons(){
    this.pokeService.getPokemons(this.offset).subscribe(res => {
      let result = res.json().results

      console.log('result', result);
      this.offset = this.offset + result.length;
      this.totalPages = Math.ceil(res.json().count / 20);

      if(result){
        result.forEach(element => {
          this.pokemons.push(element);
        });
      }
    });
  }

  itemTapped(event, item) {
    console.log(item);
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
