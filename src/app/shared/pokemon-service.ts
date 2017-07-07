import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PokemonService {
  urlBase : string = "http://pokeapi.co";

  constructor(private http: Http) { }

  getPokemonDetail(current_pokemon): Observable<Response> {
    console.log('current_pokemon in service pokemon: ',current_pokemon);
    let full_url = `${this.urlBase}/api/v2/pokemon/${current_pokemon}`;
    console.log('full_url in service pokemon: ',full_url);
    let response = this.http.get(full_url);
    console.log('response in service pokemon: ',response);
    return response;
  }

  getPokemons(offset:number): Observable<Response> {
    return this.http.get(`${this.urlBase}/api/v2/pokemon/?offset=${offset}`);
  }
}