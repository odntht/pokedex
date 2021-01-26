import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  URL_BASE = 'https://pokeapi.co/api/v2/';
  pokemonsUrl = this.URL_BASE + 'pokemon?limit=1118';
  geracoesUrl = this.URL_BASE + 'generation/';
  versoesJogosUrl = this.URL_BASE + 'version-group/';

  constructor(private http: HttpClient) { }

  listarPokemons() {
    return this.http.get<any[]>(`${this.pokemonsUrl}`);
  };

  listarGeracoes(numero){
    if(!!numero){
      return this.http.get<any[]>(`${this.geracoesUrl}`+numero);
    } else{
      return this.http.get<any[]>(`${this.geracoesUrl}`);
    }
  }

  listarVersoesJogos(){
    return this.http.get<any[]>(`${this.versoesJogosUrl}`);
  }

}
