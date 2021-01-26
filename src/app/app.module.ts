import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListagemComponent } from './pokemon-listagem/pokemon-listagem.component';
import { PokemonService } from './pokemon.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaGeracoesComponent } from './lista-geracoes/lista-geracoes.component';
import { PokemonDetalhesComponent } from './pokemon-detalhes/pokemon-detalhes.component';
import { GeracaoDetalhesComponent } from './geracao-detalhes/geracao-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListagemComponent,
    ListaGeracoesComponent,
    PokemonDetalhesComponent,
    GeracaoDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
