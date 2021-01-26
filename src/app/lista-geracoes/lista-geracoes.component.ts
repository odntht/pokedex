import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-lista-geracoes',
  templateUrl: './lista-geracoes.component.html',
  styleUrls: ['./lista-geracoes.component.css']
})
export class ListaGeracoesComponent implements OnInit {
  listaGeracoes: any[] = [];
  listaVersoes = [];
  listaPokemons = []


  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.listarGeracoes();
  }

  listarGeracoes() {
    this.pokemonService.listarGeracoes()
      .subscribe(dados => (
        this.listaGeracoes = dados,
        this.formataNomesGeracoes(this.listaGeracoes.results),
        this.listarVersoes()
      )
      )
  }

  formataNomesGeracoes(listaGeracoes: any[]) {
    listaGeracoes.forEach(function (item, index) {
      item.nome = 'Geração ' + (index + 1);
    })
  }

  listarVersoes() {
    this.listaGeracoes.results.forEach((element, index) => {
      this.pokemonService.listarGeracoes(index + 1)
        .subscribe(
          (dados => (
            this.listaVersoes.push(dados.version_groups),
            this.listaPokemons.push(dados.pokemon_species)
            )
          )
        );
    });
  }
}
