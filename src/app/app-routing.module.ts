import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonModule } from './modules/pokemon/pokemon.module';

const routes: Routes = [
  {
    path: '**',
    loadChildren: () => import('./modules/pokemon/pokemon.module').then(m => m.PokemonModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
