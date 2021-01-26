import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeracaoDetalhesComponent } from './geracao-detalhes/geracao-detalhes.component';
import { ListaGeracoesComponent } from './lista-geracoes/lista-geracoes.component';
import { PokemonDetalhesComponent } from './pokemon-detalhes/pokemon-detalhes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/lista',
    pathMatch: 'full'
  },
  {
    path: 'lista',
    component: ListaGeracoesComponent
  },
  {
    path: 'geracao/:id',
    component: GeracaoDetalhesComponent
  },
  
  {
    path: 'pokemon/:id',
    component: PokemonDetalhesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  GeracaoDetalhesComponent,
  ListaGeracoesComponent,
  PokemonDetalhesComponent
]