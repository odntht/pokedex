import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  URL_BASE = 'https://pokeapi.co/api/v2/';
  pokemonsUrl = this.URL_BASE + 'pokemon';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.pokemonsUrl}`);
  }

}
