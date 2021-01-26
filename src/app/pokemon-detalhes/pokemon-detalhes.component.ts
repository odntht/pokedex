import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detalhes',
  templateUrl: './pokemon-detalhes.component.html',
  styleUrls: ['./pokemon-detalhes.component.css']
})
export class PokemonDetalhesComponent implements OnInit {
  detalhesPokemon = [];
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.listarDetalhes(id)
  }

  listarDetalhes(id) {
    this.pokemonService.listarDetalhesPokemon(id)
      .subscribe(dados => (
        this.detalhesPokemon = dados,
        console.log(this.detalhesPokemon)

      )
      )
  }

}
