import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { PokemonDataComponent } from './pages/pokemon-data/pokemon-data.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonDataComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
  ]
})
export class PokemonModule { }
