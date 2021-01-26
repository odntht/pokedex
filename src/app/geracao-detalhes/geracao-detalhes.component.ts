import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-geracao-detalhes',
  templateUrl: './geracao-detalhes.component.html',
  styleUrls: ['./geracao-detalhes.component.css']
})

export class GeracaoDetalhesComponent implements OnInit {
  @Input() public parentData;
  listaVersoes = [];
  listaGeral = [];
  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.listarPokemons(id)

  }

  listarPokemons(id) {
    this.pokemonService.listarPokemons(id)
      .subscribe(dados => (
        this.listaGeral = dados,
        this.obterImagem(this.listaGeral.results)
      )
      )
  }

  obterImagem(listaGeral) {
    listaGeral.forEach(element => {
      element.id = element.url.replace('https://pokeapi.co/api/v2/pokemon/', '');
      element.id = element.id.replace('/', '')
    });
  }

  onSelect(item) {
    this.router.navigate(['/pokemon', item])
  }



}

