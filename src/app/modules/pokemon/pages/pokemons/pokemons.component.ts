import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../../services/pokemon.service';
import { PokemonDto } from 'src/app/models/pokemon.dto';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html'
})
export class PokemonsComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  data: PokemonDto[] = [];

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.pokemonService.getAll().subscribe(data => this.data = data);
  }
}
