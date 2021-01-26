import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-geracao-detalhes',
  templateUrl: './geracao-detalhes.component.html',
  styleUrls: ['./geracao-detalhes.component.css']
})

export class GeracaoDetalhesComponent implements OnInit {
  @Input() public parentData;
  listaVersoes = [];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.listarGeracoes(this.parentData);
  }

  

}

