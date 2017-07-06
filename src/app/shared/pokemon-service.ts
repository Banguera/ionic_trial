import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PokemonService {
  urlBase : string = "http://pokeapi.co";

  constructor(private http: Http) { }

  getPokemonDetail(current_pokemon): Observable<Response> {
    return this.http.get(`${this.urlBase}/api/v2/pokemon/${current_pokemon}`);
  }

  getPokemons(offset:number): Observable<Response> {
    return this.http.get(`${this.urlBase}/api/v2/pokemon/?offset=${offset}`);
  }
}