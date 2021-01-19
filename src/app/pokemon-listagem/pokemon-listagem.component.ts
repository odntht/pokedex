import { Component, OnInit } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-listagem',
  templateUrl: './pokemon-listagem.component.html',
  styleUrls: ['./pokemon-listagem.component.css']
})
export class PokemonListagemComponent implements OnInit {

  listaPokemon: Array<any> = [];
  listaGeracoes: Array<any> = [];
  listaVersoesJogos: Array<any> = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {

    this.listarGeracoes();
    this.listarPokemons();
    this.listarVersoesJogos();
  }

  listarPokemons() {
    this.pokemonService.listarPokemons().subscribe(dados => this.listaPokemon = dados);
  }

  listarGeracoes() {
    this.pokemonService.listarGeracoes().subscribe(dados => this.listaGeracoes = dados);
  }

  listarVersoesJogos() {
    this.pokemonService.listarVersoesJogos().subscribe(dados => this.listaVersoesJogos = dados);
  }
}
