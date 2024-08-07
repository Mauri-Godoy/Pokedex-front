import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { PokemonDataComponent } from './pages/pokemon-data/pokemon-data.component';

const routes: Routes = [{
  path: '',
  component: PokemonsComponent
},
{
  path: ":id",
  component: PokemonDataComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
