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
  offset: number = 0;
  limit: number = 10;

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.pokemonService.getAll(this.offset, this.limit).subscribe(data => this.data = data);
  }

  nextPage() {
    this.offset += this.limit;
    this.getData()
  }

  previousPage() {
    this.offset -= this.limit;
    this.getData()
  }
}
