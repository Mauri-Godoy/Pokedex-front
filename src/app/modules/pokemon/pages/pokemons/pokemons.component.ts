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
  loading: boolean = true;

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.loading = true;
    this.pokemonService.getAll(this.offset, this.limit).subscribe({
      next: res => {
        this.data = res;
      },
      error: err => {
        console.error(err);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
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
