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

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {

    this.listar();

  }

  listar(){
    this.pokemonService.listar().subscribe(dados => this.listaPokemon = dados);
    
  }
}
