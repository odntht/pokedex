import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  URL_BASE = 'https://pokeapi.co/api/v2/';
  pokemonsUrl = this.URL_BASE + 'pokemon';
  geracoesUrl = this.URL_BASE + 'generation/';
  versoesJogosUrl = this.URL_BASE + 'version-group/';

  constructor(private http: HttpClient) { }

  listarPokemons(geracao, limit = '?limit=1118') {
    let inicio;
    switch (geracao) {
      case 1:
        inicio = '?offset=0'
        limit = '&limit=151'
        break;
      case 2:
        inicio = '?offset=151'
        limit = '&limit=100'
        break;
      case 3:
        inicio = '?offset=251'
        limit = '&limit=135'
        break;
      case 4:
        inicio = '?offset=386'
        limit = '&limit=107'
        break;
      case 5:
        inicio = '?offset=493'
        limit = '&limit=156'
        break;
      case 6:
        inicio = '?offset=649'
        limit = '&limit=72'
        break;
      case 7:
        inicio = '?offset=721'
        limit = '&limit=88'
        break;
      case 8:
        inicio = '?offset=809'
        limit = '&limit=81'
        break;

      default:
        inicio = '?offset=0'
        limit = '&limit=9999'
        break;
    }
    return this.http.get<any[]>(`${this.pokemonsUrl}` + inicio + limit);
  };

  listarGeracoes(numero) {
    if (!!numero) {
      return this.http.get<any[]>(`${this.geracoesUrl}` + numero);
    } else {
      return this.http.get<any[]>(`${this.geracoesUrl}`);
    }
  }

  listarVersoesJogos() {
    return this.http.get<any[]>(`${this.versoesJogosUrl}`);
  }

  listarDetalhesPokemon(id){
    return this.http.get<any[]>(`${this.pokemonsUrl}`+'/'+id);
  }

}
